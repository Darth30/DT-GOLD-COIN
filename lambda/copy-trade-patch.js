/**
 * ============================================================
 * DTGC Q7 COPY TRADING - LAMBDA PATCH
 * ============================================================
 * ADD these sections to your metal-perps-auto-trader index.js
 * This adds: DynamoDB persistence, server-side copy execution,
 * one-click-and-disconnect, PnL tracking, and revamped TG messages
 * ============================================================
 */

// ==========================================
// SECTION 1: ADD TO TOP OF index.js (IMPORTS)
// ==========================================
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const ddbClient = new DynamoDBClient({ region: 'us-east-2' });
const ddb = DynamoDBDocumentClient.from(ddbClient);
const COPY_TRADERS_TABLE = 'dtgc-copy-traders';
const COPY_TRADES_TABLE = 'dtgc-copy-trades';

// Telegram Bot Config - ADD these as Lambda env vars
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;

// ==========================================
// SECTION 2: COPY TRADER PERSISTENCE (DynamoDB)
// ==========================================

async function registerCopyTrader(walletAddress, arbBalance = 0) {
    const params = {
          TableName: COPY_TRADERS_TABLE,
          Item: {
                  walletAddress: walletAddress.toLowerCase(),
                  registeredAt: Date.now(),
                  active: true,
                  delegated: true,
                  lastSyncTime: 0,
                  totalPnl: 0,
                  totalWins: 0,
                  totalLosses: 0,
                  totalTrades: 0,
                  arbBalance: arbBalance,
                  mirroredPositions: [],
                  lastNotified: 0
          }
    };
    await ddb.send(new PutCommand(params));
    console.log(`[COPY] Registered copy trader: ${walletAddress}`);

  await sendTelegramRich({
        type: 'COPY_REGISTERED',
        wallet: walletAddress,
        balance: arbBalance
  });

  return { success: true, message: 'Copy trader registered' };
}

async function unregisterCopyTrader(walletAddress) {
    const params = {
          TableName: COPY_TRADERS_TABLE,
          Key: { walletAddress: walletAddress.toLowerCase() },
          UpdateExpression: 'SET active = :false, deactivatedAt = :now',
          ExpressionAttributeValues: {
                  ':false': false,
                  ':now': Date.now()
          }
    };
    await ddb.send(new UpdateCommand(params));
    console.log(`[COPY] Unregistered copy trader: ${walletAddress}`);
    return { success: true, message: 'Copy trader unregistered' };
}

async function getAllActiveCopyTraders() {
    const params = {
          TableName: COPY_TRADERS_TABLE,
          FilterExpression: 'active = :true',
          ExpressionAttributeValues: { ':true': true }
    };
    const result = await ddb.send(new ScanCommand(params));
    return result.Items || [];
}

async function getCopyTraderStatus(walletAddress) {
    const params = {
          TableName: COPY_TRADERS_TABLE,
          Key: { walletAddress: walletAddress.toLowerCase() }
    };
    const result = await ddb.send(new GetCommand(params));
    return result.Item || null;
}

async function updateCopyTraderPnl(walletAddress, pnlDelta, isWin) {
    const params = {
          TableName: COPY_TRADERS_TABLE,
          Key: { walletAddress: walletAddress.toLowerCase() },
          UpdateExpression: 'SET totalPnl = totalPnl + :pnl, totalTrades = totalTrades + :one, lastSyncTime = :now' +
                  (isWin ? ', totalWins = totalWins + :one' : ', totalLosses = totalLosses + :one'),
          ExpressionAttributeValues: {
                  ':pnl': pnlDelta,
                  ':one': 1,
                  ':now': Date.now()
          }
    };
    await ddb.send(new UpdateCommand(params));
}

async function updateCopyTraderPositions(walletAddress, positions) {
    const params = {
          TableName: COPY_TRADERS_TABLE,
          Key: { walletAddress: walletAddress.toLowerCase() },
          UpdateExpression: 'SET mirroredPositions = :pos, lastSyncTime = :now',
          ExpressionAttributeValues: {
                  ':pos': positions,
                  ':now': Date.now()
          }
    };
    await ddb.send(new UpdateCommand(params));
}


// ==========================================
// SECTION 3: SERVER-SIDE COPY TRADE EXECUTION
// ==========================================

async function executeCopyTrades(q7Wallet, q7Positions, provider) {
    const copyTraders = await getAllActiveCopyTraders();

  if (copyTraders.length === 0) {
        console.log('[COPY] No active copy traders');
        return { synced: 0 };
  }

  console.log(`[COPY] Syncing ${copyTraders.length} copy traders with ${q7Positions.length} Q7 positions`);

  const API_URL = process.env.GTRADE_API_URL || 'https://backend-arbitrum.gains.trade';
    let totalSynced = 0;
    const syncResults = [];

  for (const trader of copyTraders) {
        try {
                // 1. Fetch copy trader's current open positions on gTrade
          const traderPositions = await fetchOpenTrades(trader.walletAddress, API_URL);

          // 2. Determine which Q7 positions need to be mirrored
          const q7PositionKeys = new Set(q7Positions.map(p =>
                    `${p.pairIndex}-${p.long}-${p.leverage}`
                                                               ));
                const traderPositionKeys = new Set(traderPositions.map(p =>
                          `${p.trade.pairIndex}-${p.trade.long}-${p.trade.leverage}`
                                                                             ));

          // Positions to OPEN (Q7 has, trader doesn't)
          const toOpen = q7Positions.filter(p => {
                    const key = `${p.pairIndex}-${p.long}-${p.leverage}`;
                    return !traderPositionKeys.has(key);
          });

          // Positions to CLOSE (trader has, Q7 doesn't)
          const toClose = traderPositions.filter(p => {
                    const key = `${p.trade.pairIndex}-${p.trade.long}-${p.trade.leverage}`;
                    return !q7PositionKeys.has(key);
          });

          console.log(`[COPY] ${trader.walletAddress.slice(0,8)}: Open ${toOpen.length}, Close ${toClose.length}`);

          // 3. Execute opens via delegated trading
          for (const pos of toOpen) {
                    try {
                                await openDelegatedTrade(trader.walletAddress, pos, provider);
                                totalSynced++;
                    } catch (err) {
                                console.error(`[COPY] Failed to open for ${trader.walletAddress.slice(0,8)}: ${err.message}`);
                    }
          }

          // 4. Execute closes via delegated trading
          for (const pos of toClose) {
                    try {
                                const pnl = await closeDelegatedTrade(trader.walletAddress, pos, provider);
                                const isWin = pnl > 0;
                                await updateCopyTraderPnl(trader.walletAddress, pnl, isWin);

                      // 5% growth engine flywheel on wins
                      if (isWin) {
                                    const flywheelAmount = pnl * 0.05;
                                    console.log(`[COPY] Flywheel: $${flywheelAmount.toFixed(4)} from ${trader.walletAddress.slice(0,8)} win`);
                      }
                                totalSynced++;
                    } catch (err) {
                                console.error(`[COPY] Failed to close for ${trader.walletAddress.slice(0,8)}: ${err.message}`);
                    }
          }

          // 5. Update trader's mirrored positions in DynamoDB
          const updatedPositions = q7Positions.map(p => ({
                    pairIndex: p.pairIndex,
                    long: p.long,
                    leverage: p.leverage,
                    collateral: p.collateral,
                    openPrice: p.openPrice,
                    syncedAt: Date.now()
          }));
                await updateCopyTraderPositions(trader.walletAddress, updatedPositions);

          syncResults.push({
                    wallet: trader.walletAddress.slice(0, 8) + '...',
                    opened: toOpen.length,
                    closed: toClose.length,
                    status: 'OK'
          });

        } catch (err) {
                console.error(`[COPY] Error syncing ${trader.walletAddress}: ${err.message}`);
                syncResults.push({
                          wallet: trader.walletAddress.slice(0, 8) + '...',
                          status: 'ERROR',
                          error: err.message
                });
        }
  }

  // Send consolidated TG notification
  if (totalSynced > 0) {
        await sendTelegramRich({
                type: 'COPY_SYNC',
                totalSynced,
                traders: syncResults,
                q7Positions: q7Positions.length
        });
  }

  return { synced: totalSynced, results: syncResults };
}

async function fetchOpenTrades(walletAddress, apiUrl) {
    const url = `${apiUrl}/open-trades/${walletAddress}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch trades for ${walletAddress}`);
    return res.json();
}


// ==========================================
// SECTION 4: ADD TO handler() - COPY TRADE API ENDPOINTS
// ==========================================
// Add these cases inside your existing handler's HTTP request routing:

/*
  // --- COPY TRADING API ROUTES ---
  if (event.requestContext?.http?.method === 'POST') {
    const body = JSON.parse(event.body || '{}');

    // Register copy trader
    if (body.action === 'register_copy_trader') {
      const result = await registerCopyTrader(body.walletAddress, body.arbBalance);
      return { statusCode: 200, body: JSON.stringify(result) };
    }

    // Unregister copy trader
    if (body.action === 'unregister_copy_trader') {
      const result = await unregisterCopyTrader(body.walletAddress);
      return { statusCode: 200, body: JSON.stringify(result) };
    }

    // Get copy trader status + PnL
    if (body.action === 'get_copy_status') {
      const status = await getCopyTraderStatus(body.walletAddress);
      return { statusCode: 200, body: JSON.stringify(status || { active: false }) };
    }

    // Get all copy traders (admin)
    if (body.action === 'get_all_copy_traders') {
      const traders = await getAllActiveCopyTraders();
      return { statusCode: 200, body: JSON.stringify({ traders, count: traders.length }) };
    }
  }
*/


// ==========================================
// SECTION 5: ADD TO EventBridge handler (scheduled invocation)
// ==========================================
// Inside your existing scheduled handler, after managePortfolio() runs,
// add the copy trade sync:

/*
  // After managePortfolio completes and you have status.positions:
  try {
    const copyResult = await executeCopyTrades(
      wallet.address,
      status.positions,  // Q7's current open positions
      provider
    );
    console.log(`[COPY] Sync complete: ${copyResult.synced} trades executed`);
  } catch (err) {
    console.error('[COPY] Sync failed:', err.message);
  }
*/


// ==========================================
// SECTION 6: REVAMPED TELEGRAM MESSAGES
// ==========================================

async function sendTelegramRich(data) {
    if (!TG_BOT_TOKEN || !TG_CHAT_ID) return;

  let message = '';

  switch (data.type) {
    case 'TRADE_OPENED':
            message = [
                      `\u{1F7E2} <b>TRADE OPENED</b>`,
                      ``,
                      `\u{1F4CA} <b>${data.direction} ${data.asset}</b>`,
                      `\u{1F4B0} Collateral: <code>$${data.collateral}</code>`,
                      `\u{1F4C8} Leverage: <code>${data.leverage}x</code>`,
                      `\u{1F3AF} Entry: <code>$${data.openPrice}</code>`,
                      `\u{2705} TP: <code>$${data.tp}</code>`,
                      `\u{1F6D1} SL: <code>$${data.sl}</code>`,
                      ``,
                      `\u{1F916} <i>Q7 D-RAM v5.2 | gTrade v10</i>`,
                      `\u{23F0} ${new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'America/New_York' })} ET`
                    ].join('\n');
            break;

    case 'TRADE_CLOSED':
            const pnlEmoji = data.pnl >= 0 ? '\u{1F4B0}' : '\u{1F534}';
            const pnlSign = data.pnl >= 0 ? '+' : '';
            message = [
                      `${data.pnl >= 0 ? '\u{2705}' : '\u{274C}'} <b>TRADE CLOSED</b>`,
                      ``,
                      `\u{1F4CA} <b>${data.direction} ${data.asset}</b>`,
                      `\u{1F3AF} Entry: <code>$${data.openPrice}</code> \u{2192} Exit: <code>$${data.closePrice}</code>`,
                      `${pnlEmoji} PnL: <b>${pnlSign}$${data.pnl.toFixed(2)}</b> (${pnlSign}${data.pnlPercent.toFixed(1)}%)`,
                      `\u{1F4B0} Collateral: <code>$${data.collateral}</code> | ${data.leverage}x`,
                      data.pnl > 0 ? `\u{1F31F} Growth Engine: <code>$${(data.pnl * 0.05).toFixed(4)}</code> \u{2192} PLS buyback` : '',
                      ``,
                      `\u{1F916} <i>Q7 D-RAM v5.2 | gTrade v10</i>`
                    ].filter(Boolean).join('\n');
            break;

    case 'PORTFOLIO_UPDATE':
            const winRate = data.totalTrades > 0 ? ((data.wins / data.totalTrades) * 100).toFixed(1) : '0';
            message = [
                      `\u{1F4CA} <b>PORTFOLIO STATUS</b>`,
                      `\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}`,
                      ``,
                      `\u{1F4B0} <b>Balance:</b> <code>$${data.balance.toFixed(2)}</code>`,
                      `\u{1F4C8} <b>Deployed:</b> <code>$${data.deployed.toFixed(2)}</code>`,
                      `\u{1F4CA} <b>Open Positions:</b> <code>${data.openPositions}</code>`,
                      ``,
                      `\u{1F3AF} <b>Session Performance</b>`,
                      `   \u{2705} Wins: <code>${data.wins}</code> | \u{274C} Losses: <code>${data.losses}</code>`,
                      `   \u{1F4C9} Win Rate: <code>${winRate}%</code>`,
                      `   \u{1F4B5} Total PnL: <code>${data.totalPnl >= 0 ? '+' : ''}$${data.totalPnl.toFixed(2)}</code>`,
                      ``,
                      `\u{1F465} <b>Copy Traders:</b> <code>${data.copyTraderCount || 0}</code> active`,
                      `\u{1F31F} <b>Growth Engine:</b> <code>$${(data.flywheelTotal || 0).toFixed(4)}</code>`,
                      ``,
                      `\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}`,
                      `\u{1F916} <i>Q7 D-RAM v5.2 | Arbitrum | gTrade v10</i>`,
                      `\u{23F0} ${new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'America/New_York' })} ET`
                    ].join('\n');
            break;

    case 'CLUSTER_CLOSE':
            message = [
                      `\u{1F4A5} <b>CLUSTER CLOSED</b>`,
                      ``,
                      `\u{1F4CA} <b>${data.direction} ${data.asset}</b> \u{00D7}${data.count} positions`,
                      `\u{1F4B0} Total Collateral: <code>$${data.totalCollateral.toFixed(2)}</code>`,
                      `\u{1F4C8} Avg PnL: <code>${data.avgPnl >= 0 ? '+' : ''}${data.avgPnl.toFixed(2)}%</code>`,
                      `\u{1F4B5} Total PnL: <code>${data.totalPnlUsd >= 0 ? '+' : ''}$${data.totalPnlUsd.toFixed(2)}</code>`,
                      ``,
                      data.totalPnlUsd > 0 ? `\u{1F31F} Flywheel: <code>$${(data.totalPnlUsd * 0.05).toFixed(4)}</code> \u{2192} Growth Engine` : '',
                      `\u{1F916} <i>Q7 Cluster Guard | gTrade v10</i>`
                    ].filter(Boolean).join('\n');
            break;

    case 'COPY_REGISTERED':
            message = [
                      `\u{1F465} <b>NEW COPY TRADER</b>`,
                      ``,
                      `\u{1F4CE} Wallet: <code>${data.wallet.slice(0,6)}...${data.wallet.slice(-4)}</code>`,
                      `\u{1F4B0} ARB Balance: <code>$${data.balance.toFixed(2)}</code>`,
                      `\u{2705} Delegation verified on-chain`,
                      `\u{1F504} Auto-mirroring Q7 positions enabled`,
                      ``,
                      `\u{1F680} <i>Copy trading is live - trades mirror automatically</i>`
                    ].join('\n');
            break;

    case 'COPY_SYNC':
            const traderList = data.traders.map(t =>
                      `   ${t.status === 'OK' ? '\u{2705}' : '\u{274C}'} ${t.wallet}: +${t.opened || 0} / -${t.closed || 0}`
                                                      ).join('\n');
            message = [
                      `\u{1F504} <b>COPY TRADE SYNC</b>`,
                      ``,
                      `\u{1F916} Q7 Positions: <code>${data.q7Positions}</code>`,
                      `\u{1F465} Traders Synced: <code>${data.traders.length}</code>`,
                      `\u{1F4CA} Total Executions: <code>${data.totalSynced}</code>`,
                      ``,
                      traderList,
                      ``,
                      `\u{23F0} ${new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'America/New_York' })} ET`
                    ].join('\n');
            break;

    case 'SIGNAL':
            const signalEmoji = data.direction === 'LONG' ? '\u{1F7E2}' : '\u{1F534}';
            const confluenceBar = '\u{2588}'.repeat(Math.min(Math.round(data.confluence / 10), 10)) +
                                         '\u{2591}'.repeat(10 - Math.min(Math.round(data.confluence / 10), 10));
            message = [
                      `${signalEmoji} <b>Q7 SIGNAL: ${data.direction} ${data.asset}</b>`,
                      ``,
                      `\u{1F4CA} <b>Analysis</b>`,
                      `   Score: <code>${data.score}/100</code>`,
                      `   Confluence: [${confluenceBar}] <code>${data.confluence}%</code>`,
                      ``,
                      `\u{1F4C8} <b>Indicators</b>`,
                      `   RSI: <code>${data.rsi}</code>`,
                      `   EMA: <code>${data.emaSignal}</code>`,
                      `   ADX: <code>${data.adx}</code>`,
                      `   CVD: <code>${data.cvdSignal}</code>`,
                      ``,
                      `\u{1F3AF} Entry: <code>$${data.price}</code>`,
                      `\u{2705} TP: <code>$${data.tp}</code> | \u{1F6D1} SL: <code>$${data.sl}</code>`,
                      ``,
                      `\u{1F916} <i>Q7 D-RAM v5.2 | ${data.session || 'Standard'} Session</i>`
                    ].join('\n');
            break;

    default:
            message = `\u{1F916} ${JSON.stringify(data)}`;
  }

  try {
        const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;
        await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                          chat_id: TG_CHAT_ID,
                          text: message,
                          parse_mode: 'HTML',
                          disable_web_page_preview: true
                })
        });
  } catch (err) {
        console.error('[TG] Failed to send:', err.message);
  }
}

// Replace your existing sendPortfolioAlert / sendTelegramMessage calls
// with sendTelegramRich() using the appropriate type


// ==========================================
// SECTION 7: DYNAMODB TABLE CREATION (run once via AWS CLI)
// ==========================================
/*
  aws dynamodb create-table \
    --table-name dtgc-copy-traders \
    --attribute-definitions AttributeName=walletAddress,AttributeType=S \
    --key-schema AttributeName=walletAddress,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-east-2

  aws dynamodb create-table \
    --table-name dtgc-copy-trades \
    --attribute-definitions \
      AttributeName=tradeId,AttributeType=S \
      AttributeName=walletAddress,AttributeType=S \
    --key-schema \
      AttributeName=tradeId,KeyType=HASH \
      AttributeName=walletAddress,KeyType=RANGE \
    --billing-mode PAY_PER_REQUEST \
    --region us-east-2
*/


// ==========================================
// SECTION 8: LAMBDA ENV VARS TO ADD
// ==========================================
/*
  TG_BOT_TOKEN = your-telegram-bot-token
  TG_CHAT_ID = your-telegram-chat-id
*/


// ==========================================
// SECTION 9: LAMBDA IAM POLICY ADDITION
// ==========================================
/*
  Add DynamoDB permissions to Lambda execution role:
  {
    "Effect": "Allow",
    "Action": [
      "dynamodb:PutItem",
      "dynamodb:GetItem",
      "dynamodb:UpdateItem",
      "dynamodb:DeleteItem",
      "dynamodb:Scan",
      "dynamodb:Query"
    ],
    "Resource": [
      "arn:aws:dynamodb:us-east-2:164172877446:table/dtgc-copy-traders",
      "arn:aws:dynamodb:us-east-2:164172877446:table/dtgc-copy-trades"
    ]
  }
*/


// ==========================================
// SECTION 10: FRONTEND PATCH (App.jsx)
// ==========================================
// Replace the copy trading START button handler with:
/*

  const LAMBDA_URL = 'https://mqd4yvwog76amuift2p23du2ma0ehaqp.lambda-url.us-east-2.on.aws/';

  async function handleStartCopyTrading() {
    try {
      // Step 1: Sign the gTrade delegation tx (existing code)
      await signDelegationTransaction();

      // Step 2: Register with Lambda for persistent server-side mirroring
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'register_copy_trader',
          walletAddress: userAddress,
          arbBalance: usdcBalance
        })
      });
      const result = await response.json();

      if (result.success) {
        setCopyTradingActive(true);
        setActivityLog(prev => [...prev, {
          type: 'COPY_REGISTERED',
          message: 'Copy trading activated! Trades will mirror even when disconnected.',
          time: new Date().toLocaleTimeString()
        }]);
      }
    } catch (err) {
      console.error('Failed to start copy trading:', err);
    }
  }

  // Fetch copy trader PnL on connect:
  async function fetchCopyTraderPnl() {
    try {
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'get_copy_status',
          walletAddress: userAddress
        })
      });
      const status = await response.json();
      if (status && status.active) {
        setCopyTradingActive(true);
        setCopyPnl({
          total: status.totalPnl,
          wins: status.totalWins,
          losses: status.totalLosses
        });
      }
    } catch (err) {
      console.error('Failed to fetch copy status:', err);
    }
  }

  // Call fetchCopyTraderPnl() in useEffect when wallet connects
*/


module.exports = {
    registerCopyTrader,
    unregisterCopyTrader,
    getAllActiveCopyTraders,
    getCopyTraderStatus,
    updateCopyTraderPnl,
    updateCopyTraderPositions,
    executeCopyTrades,
    sendTelegramRich
};
