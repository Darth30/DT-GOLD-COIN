// PulseChain Network Configuration for dump.tires
// DTGC Token: 0xD0676B28a457371D58d47E5247b439114e40Eb0F
// URMOM Token: 0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0

export const PULSECHAIN = {
  id: 369,
  name: 'PulseChain',
  network: 'pulsechain',
  nativeCurrency: {
    decimals: 18,
    name: 'Pulse',
    symbol: 'PLS',
  },
  rpcUrls: {
    public: { http: ['https://rpc.pulsechain.com'] },
    default: { http: ['https://rpc.pulsechain.com'] },
  },
  blockExplorers: {
    default: { name: 'PulseScan', url: 'https://scan.pulsechain.com' },
  },
};

// Token Addresses
export const TOKENS = {
  DTGC: {
    address: '0xD0676B28a457371D58d47E5247b439114e40Eb0F',
    decimals: 18,
    symbol: 'DTGC',
    name: 'DTGC Token',
    logo: '/dtgc-logo.png',
  },
  URMOM: {
    address: '0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0',
    decimals: 18,
    symbol: 'URMOM',
    name: 'URMOM Token',
    logo: '/urmom-logo.png',
  },
  PLS: {
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    symbol: 'PLS',
    name: 'Pulse',
  },
};

// Contract Addresses (update after deployment)
export const CONTRACTS = {
  STAKING: '0x0000000000000000000000000000000000000000', // Deploy and update
  DAO_TREASURY: '0x0000000000000000000000000000000000000000', // Deploy and update
  LP_STAKING: '0x0000000000000000000000000000000000000000', // Deploy and update
  LP_PAIR: '0x0000000000000000000000000000000000000000', // Create and update
};

// Special Addresses
export const SPECIAL_ADDRESSES = {
  BURN_ADDRESS: '0x0000000000000000000000000000000000000369',
  DEV_WALLET: '', // Your dev wallet address
};

// Staking Tiers Configuration
export const STAKING_TIERS = [
  {
    id: 0,
    name: 'Bronze',
    lockDays: 14,
    aprPercent: 5,
    diamondBonus: 1,
    color: '#CD7F32',
    gradient: 'linear-gradient(135deg, #CD7F32, #8B4513)',
  },
  {
    id: 1,
    name: 'Silver',
    lockDays: 30,
    aprPercent: 12,
    diamondBonus: 3,
    color: '#C0C0C0',
    gradient: 'linear-gradient(135deg, #C0C0C0, #A8A8A8)',
  },
  {
    id: 2,
    name: 'Diamond',
    lockDays: 90,
    aprPercent: 25,
    diamondBonus: 8,
    color: '#00BFFF',
    gradient: 'linear-gradient(135deg, #00BFFF, #1E90FF)',
  },
];

// Fee Structure
export const FEES = {
  ENTRY_FEE_PERCENT: 5,
  EXIT_FEE_PERCENT: 5,
  EMERGENCY_PENALTY_PERCENT: 20,
};

// Tokenomics
export const TOKENOMICS = {
  TOTAL_SUPPLY: 1_000_000_000,
  DEV_ALLOCATION: 830_000_000, // 83%
  DAO_REWARDS: 200_000_000,
  CIRCULATING: 100_000_000, // 10%
};

// External Links
export const LINKS = {
  PUMP_TIRES: 'https://pump.tires',
  PULSEX: 'https://app.pulsex.com',
  PULSESCAN: 'https://scan.pulsechain.com',
  GITHUB: 'https://github.com/Darth30/DT-GOLD-COIN',
  TWITTER: 'https://twitter.com/dumptires',
  TELEGRAM: 'https://t.me/dumptires',
};

// ABI Snippets for frontend
export const STAKING_ABI = [
  'function stake(uint256 amount, uint8 lockChoice) external',
  'function withdraw() external',
  'function emergencyWithdraw() external',
  'function claimRewards() external',
  'function getPosition(address user) external view returns (uint256 amount, uint256 startTime, uint256 unlockTime, uint256 lockPeriod, uint256 aprBps, uint256 diamondBonus, bool isActive, uint256 timeRemaining)',
  'function calculateAllRewards(address user) external view returns (uint256 baseRewards, uint256 feeShareRewards, uint256 diamondBonus)',
  'function getContractStats() external view returns (uint256 totalStaked, uint256 totalRewardsDistributed, uint256 feePool, uint256 contractBalance)',
  'function getTiers() external pure returns (tuple(uint256 lockDuration, uint16 aprBps, uint16 diamondBonus, string tierName)[])',
  'function totalStaked() external view returns (uint256)',
  'function lifetimeRewards(address) external view returns (uint256)',
  'function lifetimeStaked(address) external view returns (uint256)',
];

export const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function totalSupply() view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function name() view returns (string)',
];
