import React, { useState, useEffect, useCallback } from 'react';

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║               URMOM BURN TRACKER - dump.tires                 ║
    ║                                                               ║
    ║  Tracks burned URMOM tokens at PulseChain burn address        ║
    ║  0x0000000000000000000000000000000000000369                   ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

const CONFIG = {
  URMOM_ADDRESS: '0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0',
  BURN_ADDRESS: '0x0000000000000000000000000000000000000369',
  RPC_URL: 'https://rpc.pulsechain.com',
  EXPLORER: 'https://scan.pulsechain.com',
};

const styles = `
  .burn-tracker {
    background: linear-gradient(135deg, #1a1a25 0%, #12121a 100%);
    border: 1px solid #333344;
    border-radius: 20px;
    padding: 32px;
    position: relative;
    overflow: hidden;
  }

  .burn-tracker::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF6600, #FF0066, #FF6600);
    background-size: 200% 100%;
    animation: fireGradient 3s linear infinite;
  }

  @keyframes fireGradient {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .burn-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
  }

  .fire-icon {
    font-size: 3rem;
    animation: flicker 0.5s ease-in-out infinite alternate;
  }

  @keyframes flicker {
    0% { transform: scale(1) rotate(-2deg); opacity: 0.9; }
    100% { transform: scale(1.05) rotate(2deg); opacity: 1; }
  }

  .burn-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #FF6600;
  }

  .burn-subtitle {
    font-size: 0.85rem;
    color: #888899;
    margin-top: 4px;
  }

  .burn-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 24px;
  }

  .burn-stat {
    background: rgba(255, 102, 0, 0.1);
    border: 1px solid rgba(255, 102, 0, 0.3);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .burn-stat:hover {
    border-color: #FF6600;
    box-shadow: 0 0 20px rgba(255, 102, 0, 0.2);
  }

  .burn-stat-label {
    font-size: 0.75rem;
    color: #888899;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .burn-stat-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #FF6600;
  }

  .burn-stat-value.green {
    color: #AAFF00;
  }

  .burn-stat-unit {
    font-size: 0.9rem;
    color: #888899;
    margin-left: 4px;
  }

  .burn-address-container {
    background: #0a0a0f;
    border-radius: 10px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .burn-address-label {
    font-size: 0.8rem;
    color: #888899;
  }

  .burn-address {
    font-family: 'Space Mono', monospace;
    font-size: 0.85rem;
    color: #FF6600;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .burn-address:hover {
    color: #FF8833;
    text-decoration: underline;
  }

  .burn-address-link {
    background: #FF6600;
    color: #0a0a0f;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .burn-address-link:hover {
    background: #FF8833;
    transform: translateY(-1px);
  }

  .burn-progress {
    margin-top: 24px;
  }

  .burn-progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .burn-progress-label {
    font-size: 0.85rem;
    color: #888899;
  }

  .burn-progress-value {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    color: #FF6600;
  }

  .burn-progress-bar {
    height: 12px;
    background: #222230;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }

  .burn-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #FF6600, #FF0066);
    border-radius: 6px;
    transition: width 1s ease;
    position: relative;
  }

  .burn-progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .burn-recent {
    margin-top: 24px;
  }

  .burn-recent-title {
    font-size: 0.9rem;
    color: #888899;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .burn-recent-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .burn-recent-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: rgba(255, 102, 0, 0.05);
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.2s ease;
  }

  .burn-recent-item:hover {
    border-color: rgba(255, 102, 0, 0.3);
  }

  .burn-recent-amount {
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    color: #FF6600;
  }

  .burn-recent-time {
    font-size: 0.8rem;
    color: #666677;
  }

  .loading-pulse {
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  .copy-toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #222230;
    color: #AAFF00;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 0.85rem;
    animation: fadeInUp 0.3s ease;
    z-index: 1000;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 640px) {
    .burn-stats {
      grid-template-columns: 1fr;
    }
    
    .burn-address-container {
      flex-direction: column;
      text-align: center;
    }
    
    .burn-address {
      font-size: 0.7rem;
      word-break: break-all;
    }
  }
`;

// Format large numbers
const formatNumber = (num, decimals = 2) => {
  const n = parseFloat(num);
  if (n >= 1e9) return (n / 1e9).toFixed(decimals) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(decimals) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(decimals) + 'K';
  return n.toFixed(decimals);
};

// Mock recent burns (in production, fetch from explorer API)
const MOCK_RECENT_BURNS = [
  { amount: '1,234,567', time: '2 hours ago', txHash: '0x123...' },
  { amount: '567,890', time: '5 hours ago', txHash: '0x456...' },
  { amount: '2,345,678', time: '1 day ago', txHash: '0x789...' },
];

export default function BurnTracker() {
  const [burnedAmount, setBurnedAmount] = useState('0');
  const [totalSupply, setTotalSupply] = useState('0');
  const [burnPercentage, setBurnPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [recentBurns, setRecentBurns] = useState(MOCK_RECENT_BURNS);

  // Fetch burn data
  const fetchBurnData = useCallback(async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data (replace with actual contract calls)
      const mockBurned = '45678901234';
      const mockTotal = '100000000000';
      
      setBurnedAmount(mockBurned);
      setTotalSupply(mockTotal);
      setBurnPercentage((parseFloat(mockBurned) / parseFloat(mockTotal)) * 100);
      setLoading(false);
      
    } catch (error) {
      console.error('Error fetching burn data:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBurnData();
    const interval = setInterval(fetchBurnData, 60000);
    return () => clearInterval(interval);
  }, [fetchBurnData]);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONFIG.BURN_ADDRESS);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

  const openExplorer = () => {
    window.open(
      `${CONFIG.EXPLORER}/token/${CONFIG.URMOM_ADDRESS}?a=${CONFIG.BURN_ADDRESS}`,
      '_blank'
    );
  };

  return (
    <>
      <style>{styles}</style>
      
      <div className="burn-tracker">
        <div className="burn-header">
          <span className="fire-icon">🔥</span>
          <div>
            <div className="burn-title">URMOM BURN TRACKER</div>
            <div className="burn-subtitle">Tokens permanently removed from circulation</div>
          </div>
        </div>
        
        <div className="burn-stats">
          <div className="burn-stat">
            <div className="burn-stat-label">Total Burned</div>
            <div className="burn-stat-value">
              {loading ? (
                <span className="loading-pulse">...</span>
              ) : (
                <>
                  {formatNumber(burnedAmount)}
                  <span className="burn-stat-unit">URMOM</span>
                </>
              )}
            </div>
          </div>
          
          <div className="burn-stat">
            <div className="burn-stat-label">Burn Rate</div>
            <div className="burn-stat-value green">
              {loading ? (
                <span className="loading-pulse">...</span>
              ) : (
                <>
                  {burnPercentage.toFixed(2)}
                  <span className="burn-stat-unit">%</span>
                </>
              )}
            </div>
          </div>
          
          <div className="burn-stat">
            <div className="burn-stat-label">Circulating Supply</div>
            <div className="burn-stat-value">
              {loading ? (
                <span className="loading-pulse">...</span>
              ) : (
                <>
                  {formatNumber(parseFloat(totalSupply) - parseFloat(burnedAmount))}
                  <span className="burn-stat-unit">URMOM</span>
                </>
              )}
            </div>
          </div>
          
          <div className="burn-stat">
            <div className="burn-stat-label">Burned LP Value</div>
            <div className="burn-stat-value green">
              $0
              <span className="burn-stat-unit">USD</span>
            </div>
          </div>
        </div>
        
        <div className="burn-progress">
          <div className="burn-progress-header">
            <span className="burn-progress-label">Supply Burned</span>
            <span className="burn-progress-value">
              {burnPercentage.toFixed(2)}%
            </span>
          </div>
          <div className="burn-progress-bar">
            <div 
              className="burn-progress-fill"
              style={{ width: `${Math.min(burnPercentage, 100)}%` }}
            />
          </div>
        </div>
        
        <div className="burn-address-container" style={{ marginTop: '24px' }}>
          <div>
            <div className="burn-address-label">PulseChain Burn Address</div>
            <div className="burn-address" onClick={copyAddress}>
              {CONFIG.BURN_ADDRESS}
            </div>
          </div>
          <button className="burn-address-link" onClick={openExplorer}>
            View on PulseScan ↗
          </button>
        </div>
        
        <div className="burn-recent">
          <div className="burn-recent-title">
            <span>🔥</span>
            Recent Burns
          </div>
          <div className="burn-recent-list">
            {recentBurns.map((burn, index) => (
              <div key={index} className="burn-recent-item">
                <span className="burn-recent-amount">{burn.amount} URMOM</span>
                <span className="burn-recent-time">{burn.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {showCopyToast && (
        <div className="copy-toast">
          ✓ Address copied to clipboard
        </div>
      )}
    </>
  );
}
