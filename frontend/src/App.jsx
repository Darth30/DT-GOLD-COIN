import React, { useState, useEffect, useCallback } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
//                         DUMP.TIRES - DTGC STAKING DAPP
//                        PulseChain DeFi for Diamond Hands
// ═══════════════════════════════════════════════════════════════════════════

// Configuration
const CONFIG = {
  DTGC_ADDRESS: '0xD0676B28a457371D58d47E5247b439114e40Eb0F',
  URMOM_ADDRESS: '0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0',
  STAKING_ADDRESS: '0x0000000000000000000000000000000000000000', // Update after deploy
  CHAIN_ID: 369,
  RPC_URL: 'https://rpc.pulsechain.com',
  EXPLORER: 'https://scan.pulsechain.com',
};

const TIERS = [
  { id: 0, name: 'BRONZE', days: 14, apr: 5, bonus: 1, emoji: '🥉', color: '#CD7F32' },
  { id: 1, name: 'SILVER', days: 30, apr: 12, bonus: 3, emoji: '🥈', color: '#C0C0C0' },
  { id: 2, name: 'DIAMOND', days: 90, apr: 25, bonus: 8, emoji: '💎', color: '#00D4FF' },
];

// Styles
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

  :root {
    --bg-primary: #0a0a0f;
    --bg-secondary: #12121a;
    --bg-card: #1a1a25;
    --bg-elevated: #222230;
    --accent-cyan: #00D4FF;
    --accent-magenta: #FF00AA;
    --accent-lime: #AAFF00;
    --accent-orange: #FF6600;
    --text-primary: #ffffff;
    --text-secondary: #888899;
    --text-muted: #555566;
    --border-color: #333344;
    --glow-cyan: 0 0 30px rgba(0, 212, 255, 0.3);
    --glow-magenta: 0 0 30px rgba(255, 0, 170, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Space Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Animated Background Grid */
  .bg-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  }

  .bg-glow {
    position: fixed;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.15;
    pointer-events: none;
    z-index: 0;
  }

  .glow-1 {
    top: -200px;
    left: -200px;
    background: var(--accent-cyan);
    animation: float 20s ease-in-out infinite;
  }

  .glow-2 {
    bottom: -200px;
    right: -200px;
    background: var(--accent-magenta);
    animation: float 25s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(100px, 50px); }
  }

  .app-container {
    position: relative;
    z-index: 1;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 40px;
  }

  .logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 2px;
  }

  .logo-sub {
    font-size: 0.7rem;
    color: var(--text-secondary);
    letter-spacing: 4px;
    margin-top: 4px;
  }

  .connect-btn {
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta));
    border: none;
    padding: 14px 28px;
    border-radius: 8px;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--bg-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .connect-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-cyan);
  }

  .connect-btn.connected {
    background: var(--bg-card);
    color: var(--accent-cyan);
    border: 1px solid var(--accent-cyan);
  }

  /* Stats Banner */
  .stats-banner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }

  .stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    border-color: var(--accent-cyan);
    box-shadow: var(--glow-cyan);
  }

  .stat-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .stat-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-cyan);
  }

  .stat-value.magenta {
    color: var(--accent-magenta);
  }

  .stat-value.lime {
    color: var(--accent-lime);
  }

  /* Main Content Grid */
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }

  .card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 30px;
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
  }

  .card-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-title .icon {
    font-size: 1.5rem;
  }

  /* Staking Tiers */
  .tier-selector {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 24px;
  }

  .tier-card {
    background: var(--bg-secondary);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .tier-card:hover {
    border-color: var(--text-secondary);
  }

  .tier-card.selected {
    border-color: var(--accent-cyan);
    box-shadow: var(--glow-cyan);
  }

  .tier-card.selected::after {
    content: '✓';
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--accent-cyan);
    color: var(--bg-primary);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .tier-emoji {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  .tier-name {
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .tier-days {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .tier-apr {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-lime);
  }

  .tier-bonus {
    font-size: 0.7rem;
    color: var(--accent-magenta);
    margin-top: 4px;
  }

  /* Input Group */
  .input-group {
    margin-bottom: 20px;
  }

  .input-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .balance-link {
    color: var(--accent-cyan);
    cursor: pointer;
    text-decoration: underline;
  }

  .input-wrapper {
    position: relative;
  }

  .input-field {
    width: 100%;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 16px 80px 16px 16px;
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.3s ease;
  }

  .input-field:focus {
    border-color: var(--accent-cyan);
  }

  .input-max {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--accent-cyan);
    color: var(--bg-primary);
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .input-max:hover {
    opacity: 0.8;
  }

  /* Fee Breakdown */
  .fee-breakdown {
    background: var(--bg-secondary);
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 20px;
  }

  .fee-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    font-size: 0.85rem;
    border-bottom: 1px solid var(--border-color);
  }

  .fee-row:last-child {
    border-bottom: none;
    font-weight: 700;
    color: var(--accent-cyan);
  }

  .fee-row span:first-child {
    color: var(--text-secondary);
  }

  /* Action Button */
  .action-btn {
    width: 100%;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta));
    border: none;
    padding: 18px;
    border-radius: 12px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--bg-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .action-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--glow-cyan);
  }

  .action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .action-btn.secondary {
    background: transparent;
    border: 2px solid var(--accent-magenta);
    color: var(--accent-magenta);
  }

  .action-btn.danger {
    background: linear-gradient(135deg, #FF4444, #FF0066);
  }

  /* Position Card */
  .position-card {
    background: var(--bg-secondary);
    border: 2px solid var(--accent-cyan);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: var(--glow-cyan);
  }

  .position-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .position-tier {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .position-tier-badge {
    font-size: 1.5rem;
  }

  .position-tier-name {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
  }

  .position-status {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .position-status.locked {
    background: rgba(255, 0, 170, 0.2);
    color: var(--accent-magenta);
    border: 1px solid var(--accent-magenta);
  }

  .position-status.unlocked {
    background: rgba(170, 255, 0, 0.2);
    color: var(--accent-lime);
    border: 1px solid var(--accent-lime);
  }

  .position-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 20px;
  }

  .position-stat {
    text-align: center;
    padding: 12px;
    background: var(--bg-card);
    border-radius: 8px;
  }

  .position-stat-label {
    font-size: 0.7rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .position-stat-value {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
  }

  /* Progress Bar */
  .progress-container {
    margin-bottom: 20px;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 8px;
  }

  .progress-bar {
    height: 8px;
    background: var(--bg-card);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  /* Rewards Section */
  .rewards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }

  .reward-item {
    text-align: center;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  .reward-type {
    font-size: 0.7rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .reward-value {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    color: var(--accent-lime);
  }

  /* Action Buttons Grid */
  .actions-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  /* Token Info Section */
  .token-info {
    background: var(--bg-secondary);
    border-radius: 12px;
    padding: 20px;
    margin-top: 20px;
  }

  .token-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-color);
  }

  .token-row:last-child {
    border-bottom: none;
  }

  .token-label {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }

  .token-value {
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
  }

  .token-address {
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: var(--accent-cyan);
    cursor: pointer;
  }

  /* Footer */
  .footer {
    text-align: center;
    padding: 40px 0;
    border-top: 1px solid var(--border-color);
    margin-top: 60px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
  }

  .footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;
  }

  .footer-link:hover {
    color: var(--accent-cyan);
  }

  .footer-copyright {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .main-grid {
      grid-template-columns: 1fr;
    }
    
    .stats-banner {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .header {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
    
    .stats-banner {
      grid-template-columns: 1fr;
    }
    
    .tier-selector {
      grid-template-columns: 1fr;
    }
    
    .position-stats {
      grid-template-columns: 1fr;
    }
    
    .rewards-grid {
      grid-template-columns: 1fr;
    }
    
    .actions-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Toast Notifications */
  .toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  .toast {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 16px 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    animation: slideIn 0.3s ease;
  }

  .toast.success {
    border-color: var(--accent-lime);
  }

  .toast.error {
    border-color: #FF4444;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

// Main App Component
export default function DumpTiresApp() {
  // State
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [selectedTier, setSelectedTier] = useState(2); // Default to Diamond
  const [stakeAmount, setStakeAmount] = useState('');
  const [dtgcBalance, setDtgcBalance] = useState('0');
  const [position, setPosition] = useState(null);
  const [rewards, setRewards] = useState({ base: '0', feeShare: '0', diamond: '0' });
  const [stats, setStats] = useState({
    totalStaked: '0',
    totalRewards: '0',
    apy: '25',
    stakers: '0',
  });
  const [toasts, setToasts] = useState([]);

  // Mock position for demo
  const mockPosition = {
    amount: '50000',
    tier: TIERS[2],
    startTime: Date.now() - 30 * 24 * 60 * 60 * 1000,
    unlockTime: Date.now() + 60 * 24 * 60 * 60 * 1000,
    progress: 33,
    isUnlocked: false,
  };

  // Toast notification helper
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  // Connect Wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        // Check network
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (parseInt(chainId, 16) !== CONFIG.CHAIN_ID) {
          // Try to switch to PulseChain
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x171' }], // 369 in hex
            });
          } catch (switchError) {
            // If PulseChain not added, add it
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0x171',
                  chainName: 'PulseChain',
                  nativeCurrency: { name: 'Pulse', symbol: 'PLS', decimals: 18 },
                  rpcUrls: ['https://rpc.pulsechain.com'],
                  blockExplorerUrls: ['https://scan.pulsechain.com'],
                }],
              });
            }
          }
        }
        
        setAccount(accounts[0]);
        setConnected(true);
        setDtgcBalance('125000'); // Demo balance
        showToast('Wallet connected successfully!');
      } catch (error) {
        console.error('Connection error:', error);
        showToast('Failed to connect wallet', 'error');
      }
    } else {
      showToast('Please install MetaMask or a Web3 wallet', 'error');
    }
  };

  // Disconnect Wallet
  const disconnectWallet = () => {
    setConnected(false);
    setAccount('');
    setDtgcBalance('0');
    setPosition(null);
  };

  // Format address
  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Format number with commas
  const formatNumber = (num) => {
    return parseFloat(num).toLocaleString('en-US', {
      maximumFractionDigits: 2,
    });
  };

  // Calculate stake preview
  const calculateStakePreview = () => {
    const amount = parseFloat(stakeAmount) || 0;
    const entryFee = amount * 0.05;
    const principal = amount - entryFee;
    const tier = TIERS[selectedTier];
    const estimatedRewards = (principal * tier.apr / 100) * (tier.days / 365);
    const diamondBonus = (principal * tier.bonus / 100) * (tier.days / 365);
    
    return {
      entryFee: entryFee.toFixed(2),
      principal: principal.toFixed(2),
      estimatedRewards: estimatedRewards.toFixed(2),
      diamondBonus: diamondBonus.toFixed(2),
      totalExpected: (principal + estimatedRewards + diamondBonus).toFixed(2),
    };
  };

  // Handle stake
  const handleStake = async () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      showToast('Please enter a valid amount', 'error');
      return;
    }
    
    showToast('Staking transaction submitted...');
    // In production: call staking contract
    setTimeout(() => {
      setPosition({
        ...mockPosition,
        amount: stakeAmount,
        tier: TIERS[selectedTier],
      });
      setStakeAmount('');
      showToast('Successfully staked DTGC! 🎉');
    }, 2000);
  };

  // Handle claim rewards
  const handleClaimRewards = async () => {
    showToast('Claiming rewards...');
    setTimeout(() => {
      showToast('Rewards claimed successfully! 💰');
    }, 2000);
  };

  // Handle withdraw
  const handleWithdraw = async () => {
    showToast('Withdrawing position...');
    setTimeout(() => {
      setPosition(null);
      showToast('Successfully withdrawn! 🚀');
    }, 2000);
  };

  // Handle emergency withdraw
  const handleEmergencyWithdraw = async () => {
    if (!window.confirm('⚠️ Emergency withdraw will cost you 20% penalty. Are you sure?')) {
      return;
    }
    showToast('Processing emergency withdrawal...');
    setTimeout(() => {
      setPosition(null);
      showToast('Emergency withdrawal complete (20% penalty applied)', 'error');
    }, 2000);
  };

  const preview = calculateStakePreview();

  return (
    <>
      <style>{styles}</style>
      
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />
      
      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            <span>{toast.type === 'success' ? '✓' : '✕'}</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
      
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <div>
            <div className="logo">DUMP.TIRES</div>
            <div className="logo-sub">DTGC STAKING • PULSECHAIN</div>
          </div>
          
          {connected ? (
            <button className="connect-btn connected" onClick={disconnectWallet}>
              🟢 {formatAddress(account)}
            </button>
          ) : (
            <button className="connect-btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </header>
        
        {/* Stats Banner */}
        <div className="stats-banner">
          <div className="stat-card">
            <div className="stat-label">Total Value Locked</div>
            <div className="stat-value">{formatNumber(stats.totalStaked)} DTGC</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Rewards Paid</div>
            <div className="stat-value magenta">{formatNumber(stats.totalRewards)} DTGC</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Max APR</div>
            <div className="stat-value lime">{stats.apy}%</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Your Balance</div>
            <div className="stat-value">{formatNumber(dtgcBalance)} DTGC</div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="main-grid">
          {/* Staking Card */}
          <div className="card">
            <div className="card-title">
              <span className="icon">🔥</span>
              Stake DTGC
            </div>
            
            {/* Tier Selection */}
            <div className="tier-selector">
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`tier-card ${selectedTier === tier.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  <div className="tier-emoji">{tier.emoji}</div>
                  <div className="tier-name" style={{ color: tier.color }}>{tier.name}</div>
                  <div className="tier-days">{tier.days} DAYS LOCK</div>
                  <div className="tier-apr">{tier.apr}% APR</div>
                  <div className="tier-bonus">+{tier.bonus}% Diamond Bonus</div>
                </div>
              ))}
            </div>
            
            {/* Amount Input */}
            <div className="input-group">
              <div className="input-label">
                <span>Amount to Stake</span>
                <span 
                  className="balance-link"
                  onClick={() => setStakeAmount(dtgcBalance)}
                >
                  Balance: {formatNumber(dtgcBalance)} DTGC
                </span>
              </div>
              <div className="input-wrapper">
                <input
                  type="number"
                  className="input-field"
                  placeholder="0.00"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                />
                <button 
                  className="input-max"
                  onClick={() => setStakeAmount(dtgcBalance)}
                >
                  MAX
                </button>
              </div>
            </div>
            
            {/* Fee Breakdown */}
            {stakeAmount && parseFloat(stakeAmount) > 0 && (
              <div className="fee-breakdown">
                <div className="fee-row">
                  <span>Entry Fee (5%)</span>
                  <span>-{preview.entryFee} DTGC</span>
                </div>
                <div className="fee-row">
                  <span>Your Principal</span>
                  <span>{preview.principal} DTGC</span>
                </div>
                <div className="fee-row">
                  <span>Est. APR Rewards ({TIERS[selectedTier].days}d)</span>
                  <span style={{ color: '#AAFF00' }}>+{preview.estimatedRewards} DTGC</span>
                </div>
                <div className="fee-row">
                  <span>Diamond Hands Bonus</span>
                  <span style={{ color: '#FF00AA' }}>+{preview.diamondBonus} DTGC</span>
                </div>
                <div className="fee-row">
                  <span>Expected Total</span>
                  <span>{preview.totalExpected} DTGC</span>
                </div>
              </div>
            )}
            
            <button 
              className="action-btn"
              onClick={handleStake}
              disabled={!connected || !stakeAmount || parseFloat(stakeAmount) <= 0}
            >
              {!connected ? 'Connect Wallet' : position ? 'Already Staking' : 'Stake DTGC'}
            </button>
            
            {/* Token Info */}
            <div className="token-info">
              <div className="token-row">
                <span className="token-label">DTGC Contract</span>
                <span 
                  className="token-address"
                  onClick={() => window.open(`${CONFIG.EXPLORER}/token/${CONFIG.DTGC_ADDRESS}`, '_blank')}
                >
                  {formatAddress(CONFIG.DTGC_ADDRESS)} ↗
                </span>
              </div>
              <div className="token-row">
                <span className="token-label">URMOM Contract</span>
                <span 
                  className="token-address"
                  onClick={() => window.open(`${CONFIG.EXPLORER}/token/${CONFIG.URMOM_ADDRESS}`, '_blank')}
                >
                  {formatAddress(CONFIG.URMOM_ADDRESS)} ↗
                </span>
              </div>
              <div className="token-row">
                <span className="token-label">Network</span>
                <span className="token-value">PulseChain (369)</span>
              </div>
            </div>
          </div>
          
          {/* Your Position Card */}
          <div className="card">
            <div className="card-title">
              <span className="icon">💎</span>
              Your Position
            </div>
            
            {position ? (
              <>
                {/* Active Position */}
                <div className="position-card">
                  <div className="position-header">
                    <div className="position-tier">
                      <span className="position-tier-badge">{position.tier.emoji}</span>
                      <span className="position-tier-name" style={{ color: position.tier.color }}>
                        {position.tier.name} TIER
                      </span>
                    </div>
                    <span className={`position-status ${position.isUnlocked ? 'unlocked' : 'locked'}`}>
                      {position.isUnlocked ? '🔓 Unlocked' : '🔒 Locked'}
                    </span>
                  </div>
                  
                  <div className="position-stats">
                    <div className="position-stat">
                      <div className="position-stat-label">Staked Amount</div>
                      <div className="position-stat-value">{formatNumber(position.amount)} DTGC</div>
                    </div>
                    <div className="position-stat">
                      <div className="position-stat-label">APR Rate</div>
                      <div className="position-stat-value" style={{ color: '#AAFF00' }}>
                        {position.tier.apr}%
                      </div>
                    </div>
                    <div className="position-stat">
                      <div className="position-stat-label">Lock Period</div>
                      <div className="position-stat-value">{position.tier.days} Days</div>
                    </div>
                    <div className="position-stat">
                      <div className="position-stat-label">Diamond Bonus</div>
                      <div className="position-stat-value" style={{ color: '#FF00AA' }}>
                        +{position.tier.bonus}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Lock Progress */}
                  <div className="progress-container">
                    <div className="progress-label">
                      <span>Lock Progress</span>
                      <span>{position.progress}% Complete</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${position.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Pending Rewards */}
                <div style={{ marginBottom: 20 }}>
                  <div className="input-label" style={{ marginBottom: 12 }}>
                    <span>Pending Rewards</span>
                  </div>
                  <div className="rewards-grid">
                    <div className="reward-item">
                      <div className="reward-type">Base APR</div>
                      <div className="reward-value">+1,234.56</div>
                    </div>
                    <div className="reward-item">
                      <div className="reward-type">Fee Share</div>
                      <div className="reward-value">+567.89</div>
                    </div>
                    <div className="reward-item">
                      <div className="reward-type">Diamond Bonus</div>
                      <div className="reward-value" style={{ color: '#FF00AA' }}>+890.12</div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="actions-grid">
                  <button className="action-btn" onClick={handleClaimRewards}>
                    Claim Rewards
                  </button>
                  {position.isUnlocked ? (
                    <button className="action-btn secondary" onClick={handleWithdraw}>
                      Withdraw All
                    </button>
                  ) : (
                    <button className="action-btn danger" onClick={handleEmergencyWithdraw}>
                      Emergency Exit (-20%)
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* No Position State */
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: 20 }}>🏦</div>
                <div style={{ 
                  fontFamily: 'Orbitron, sans-serif', 
                  fontSize: '1.2rem', 
                  marginBottom: 12 
                }}>
                  No Active Position
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Stake DTGC to start earning rewards.<br/>
                  Diamond hands get diamond rewards! 💎
                </div>
              </div>
            )}
            
            {/* Lifetime Stats */}
            {connected && (
              <div className="token-info" style={{ marginTop: 20 }}>
                <div className="token-row">
                  <span className="token-label">Lifetime Staked</span>
                  <span className="token-value">150,000 DTGC</span>
                </div>
                <div className="token-row">
                  <span className="token-label">Lifetime Rewards</span>
                  <span className="token-value" style={{ color: '#AAFF00' }}>+12,345 DTGC</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="footer">
          <div className="footer-links">
            <a href="https://pump.tires" className="footer-link" target="_blank" rel="noopener noreferrer">
              pump.tires
            </a>
            <a href={`${CONFIG.EXPLORER}/token/${CONFIG.DTGC_ADDRESS}`} className="footer-link" target="_blank" rel="noopener noreferrer">
              DTGC Contract
            </a>
            <a href="https://github.com/dump-tires" className="footer-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://t.me/dumptires" className="footer-link" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
          <div className="footer-copyright">
            © 2025 DUMP.TIRES • Built on PulseChain • Not Financial Advice
          </div>
        </footer>
      </div>
    </>
  );
}
