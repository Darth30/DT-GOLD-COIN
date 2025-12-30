import React, { useState } from 'react';

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║               TOKEN STATS - dump.tires                        ║
    ║                                                               ║
    ║  Displays DTGC token metrics, price, and holder stats         ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

const styles = `
  .token-stats-container {
    background: linear-gradient(135deg, #1a1a25 0%, #12121a 100%);
    border: 1px solid #333344;
    border-radius: 20px;
    padding: 32px;
    position: relative;
    overflow: hidden;
  }

  .token-stats-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
    background-size: 200% 100%;
    animation: gradientMove 4s linear infinite;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .token-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;
  }

  .token-logo {
    width: 72px;
    height: 72px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #0a0a0f;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  }

  .token-info {
    flex: 1;
  }

  .token-name {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .token-network {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    font-size: 0.85rem;
    color: #888899;
  }

  .network-badge {
    background: rgba(128, 0, 128, 0.2);
    color: #9945FF;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(153, 69, 255, 0.3);
  }

  .token-price-section {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #333344;
  }

  .token-price {
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #ffffff;
  }

  .token-price-change {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 8px;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .token-price-change.positive {
    background: rgba(170, 255, 0, 0.15);
    color: #AAFF00;
  }

  .token-price-change.negative {
    background: rgba(255, 68, 68, 0.15);
    color: #FF4444;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: #0a0a0f;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .stat-item:hover {
    background: #12121a;
    transform: translateY(-2px);
  }

  .stat-label {
    font-size: 0.7rem;
    color: #666677;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .stat-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
  }

  .stat-value.gold {
    color: #FFD700;
  }

  .stat-value.lime {
    color: #AAFF00;
  }

  .tokenomics-section {
    margin-top: 24px;
  }

  .tokenomics-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: #888899;
  }

  .tokenomics-bar {
    height: 20px;
    background: #0a0a0f;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
  }

  .tokenomics-segment {
    height: 100%;
    transition: width 1s ease;
  }

  .tokenomics-segment.dev {
    background: linear-gradient(90deg, #FFD700, #FFA500);
  }

  .tokenomics-segment.circulating {
    background: linear-gradient(90deg, #AAFF00, #88CC00);
  }

  .tokenomics-legend {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 16px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    color: #888899;
  }

  .legend-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .legend-dot.dev {
    background: #FFD700;
  }

  .legend-dot.circulating {
    background: #AAFF00;
  }

  .contract-section {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #333344;
  }

  .contract-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
  }

  .contract-label {
    font-size: 0.85rem;
    color: #888899;
  }

  .contract-address {
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    color: #FFD700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s ease;
  }

  .contract-address:hover {
    color: #FFE44D;
  }

  .links-section {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }

  .link-btn {
    flex: 1;
    background: #222230;
    border: 1px solid #333344;
    border-radius: 10px;
    padding: 14px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .link-btn:hover {
    background: #333344;
    border-color: #FFD700;
    transform: translateY(-2px);
  }

  .link-btn.primary {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border: none;
    color: #0a0a0f;
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .token-price {
      font-size: 2rem;
    }
    
    .links-section {
      flex-wrap: wrap;
    }
  }
`;

const CONFIG = {
  DTGC_ADDRESS: '0xD0676B28a457371D58d47E5247b439114e40Eb0F',
  URMOM_ADDRESS: '0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0',
  EXPLORER: 'https://scan.pulsechain.com',
  PULSEX: 'https://app.pulsex.com',
};

const formatNumber = (num, decimals = 2) => {
  const n = parseFloat(num);
  if (n >= 1e9) return (n / 1e9).toFixed(decimals) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(decimals) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(decimals) + 'K';
  return n.toFixed(decimals);
};

const formatAddress = (addr) => {
  if (!addr) return '';
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

export default function TokenStats() {
  const [stats] = useState({
    price: 0.00000123,
    priceChange24h: 15.5,
    marketCap: 1234567,
    totalSupply: 1000000000,
    circulatingSupply: 100000000,
    holders: 1234,
    volume24h: 567890,
    liquidity: 234567,
  });
  
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const tokenomicsData = {
    dev: 83,
    circulating: 10,
  };

  return (
    <>
      <style>{styles}</style>
      
      <div className="token-stats-container">
        <div className="token-header">
          <div className="token-logo">DT</div>
          <div className="token-info">
            <div className="token-name">DTGC</div>
            <div className="token-network">
              <span className="network-badge">PulseChain</span>
              <span>Chain ID: 369</span>
            </div>
          </div>
        </div>
        
        <div className="token-price-section">
          <div className="token-price">
            ${stats.price.toFixed(8)}
          </div>
          <div className={`token-price-change ${stats.priceChange24h >= 0 ? 'positive' : 'negative'}`}>
            {stats.priceChange24h >= 0 ? '▲' : '▼'} {Math.abs(stats.priceChange24h)}%
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-label">Market Cap</div>
            <div className="stat-value gold">${formatNumber(stats.marketCap)}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">24h Volume</div>
            <div className="stat-value">${formatNumber(stats.volume24h)}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Liquidity</div>
            <div className="stat-value lime">${formatNumber(stats.liquidity)}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Holders</div>
            <div className="stat-value gold">{formatNumber(stats.holders, 0)}</div>
          </div>
        </div>
        
        <div className="tokenomics-section">
          <div className="tokenomics-title">TOKEN DISTRIBUTION</div>
          <div className="tokenomics-bar">
            <div 
              className="tokenomics-segment dev" 
              style={{ width: `${tokenomicsData.dev}%` }}
            />
            <div 
              className="tokenomics-segment circulating" 
              style={{ width: `${tokenomicsData.circulating}%` }}
            />
          </div>
          <div className="tokenomics-legend">
            <div className="legend-item">
              <div className="legend-dot dev" />
              <span>Dev Wallet (83%)</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot circulating" />
              <span>Circulating (10%)</span>
            </div>
          </div>
        </div>
        
        <div className="contract-section">
          <div className="contract-row">
            <span className="contract-label">DTGC Contract</span>
            <span 
              className="contract-address"
              onClick={() => copyToClipboard(CONFIG.DTGC_ADDRESS, 'dtgc')}
            >
              {formatAddress(CONFIG.DTGC_ADDRESS)}
              <span>{copied === 'dtgc' ? '✓' : '📋'}</span>
            </span>
          </div>
          <div className="contract-row">
            <span className="contract-label">URMOM Contract</span>
            <span 
              className="contract-address"
              onClick={() => copyToClipboard(CONFIG.URMOM_ADDRESS, 'urmom')}
            >
              {formatAddress(CONFIG.URMOM_ADDRESS)}
              <span>{copied === 'urmom' ? '✓' : '📋'}</span>
            </span>
          </div>
        </div>
        
        <div className="links-section">
          <a 
            href={`${CONFIG.PULSEX}/swap?outputCurrency=${CONFIG.DTGC_ADDRESS}`}
            className="link-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔄 Buy on PulseX
          </a>
          <a 
            href={`${CONFIG.EXPLORER}/token/${CONFIG.DTGC_ADDRESS}`}
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📊 PulseScan
          </a>
          <a 
            href="https://pump.tires"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 pump.tires
          </a>
        </div>
      </div>
    </>
  );
}
