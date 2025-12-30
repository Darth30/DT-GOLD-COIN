// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║              DTGC LP STAKING V2 - dump.tires                  ║
    ║                                                               ║
    ║  💎 DIAMOND TIER - Stake DTGC/URMOM LP for 12% APR           ║
    ║  Entry/Exit: 1% dev + 4% DAO                                 ║
    ║  EES: 2% dev + 18% DAO voting pool                           ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

interface IPRC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract DTGCLPStakingV2 {
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTANTS
    // ═══════════════════════════════════════════════════════════════
    
    uint256 public constant DIAMOND_APR = 1200;     // 12%
    uint256 public constant DIAMOND_LOCK = 90 days;
    uint256 public constant DIAMOND_BONUS = 500;    // 5% completion bonus
    
    // Entry/Exit fees (5% total)
    uint256 public constant ENTRY_FEE = 500;
    uint256 public constant EXIT_FEE = 500;
    uint256 public constant DEV_FEE_SHARE = 100;    // 1%
    uint256 public constant DAO_FEE_SHARE = 400;    // 4%
    
    // Emergency End Stake (EES) - 20% total
    uint256 public constant EES_PENALTY = 2000;
    uint256 public constant EES_DEV_SHARE = 200;    // 2%
    uint256 public constant EES_DAO_SHARE = 1800;   // 18%
    
    uint256 public constant BASIS_POINTS = 10000;
    uint256 public constant MIN_TOKENS_FOR_VOTING = 1_000_000 * 1e18;
    
    // Boost: 1x → 1.5x over lock period
    uint256 public constant BOOST_PRECISION = 10000;
    uint256 public constant MAX_BOOST = 15000;
    
    // ═══════════════════════════════════════════════════════════════
    //                         STATE
    // ═══════════════════════════════════════════════════════════════
    
    IPRC20 public immutable lpToken;
    IPRC20 public immutable rewardToken;
    IPRC20 public immutable dtgcToken;  // For voting eligibility check
    
    address public owner;
    address public devWallet;
    address public daoTreasury;
    address public daoVotingPool;
    
    uint256 public totalStaked;
    uint256 public totalRewardsDistributed;
    uint256 public eesPoolTotal;
    uint256 public totalStakers;
    
    struct StakePosition {
        uint256 amount;
        uint256 startTime;
        uint256 unlockTime;
        uint256 rewardDebt;
        bool isActive;
    }
    
    mapping(address => StakePosition) public positions;
    mapping(address => uint256) public lifetimeRewards;
    mapping(address => bool) public isVerifiedStaker;
    
    // ═══════════════════════════════════════════════════════════════
    //                         EVENTS
    // ═══════════════════════════════════════════════════════════════
    
    event Staked(address indexed user, uint256 amount, uint256 principal, uint256 unlockTime);
    event Withdrawn(address indexed user, uint256 lpAmount, uint256 rewards, uint256 fees);
    event EmergencyWithdrawn(address indexed user, uint256 returned, uint256 devFee, uint256 daoVotingFee);
    event RewardsClaimed(address indexed user, uint256 reward);
    event EESCollected(uint256 devAmount, uint256 daoVotingAmount);
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════
    
    constructor(
        address _lpToken,
        address _rewardToken,
        address _dtgcToken,
        address _devWallet,
        address _daoTreasury,
        address _daoVotingPool
    ) {
        require(_lpToken != address(0), "INVALID_LP");
        require(_rewardToken != address(0), "INVALID_REWARD");
        require(_dtgcToken != address(0), "INVALID_DTGC");
        require(_devWallet != address(0), "INVALID_DEV");
        require(_daoTreasury != address(0), "INVALID_DAO");
        require(_daoVotingPool != address(0), "INVALID_VOTING");
        
        lpToken = IPRC20(_lpToken);
        rewardToken = IPRC20(_rewardToken);
        dtgcToken = IPRC20(_dtgcToken);
        devWallet = _devWallet;
        daoTreasury = _daoTreasury;
        daoVotingPool = _daoVotingPool;
        owner = msg.sender;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function getBoostMultiplier(address user) public view returns (uint256) {
        StakePosition memory pos = positions[user];
        if (!pos.isActive || pos.amount == 0) return BOOST_PRECISION;
        
        uint256 elapsed = block.timestamp - pos.startTime;
        if (elapsed >= DIAMOND_LOCK) return MAX_BOOST;
        
        return BOOST_PRECISION + ((MAX_BOOST - BOOST_PRECISION) * elapsed / DIAMOND_LOCK);
    }
    
    function calculateReward(address user) public view returns (uint256) {
        StakePosition memory pos = positions[user];
        if (!pos.isActive || pos.amount == 0) return 0;
        
        uint256 elapsed = block.timestamp - pos.startTime;
        uint256 baseReward = (pos.amount * DIAMOND_APR * elapsed) / (BASIS_POINTS * 365 days);
        uint256 boost = getBoostMultiplier(user);
        
        return (baseReward * boost / BOOST_PRECISION) - pos.rewardDebt;
    }
    
    function calculateBonus(address user) public view returns (uint256) {
        StakePosition memory pos = positions[user];
        if (!pos.isActive || block.timestamp < pos.unlockTime) return 0;
        return (pos.amount * DIAMOND_BONUS) / BASIS_POINTS;
    }
    
    function getPosition(address user) external view returns (
        uint256 amount,
        uint256 startTime,
        uint256 unlockTime,
        uint256 pendingReward,
        uint256 pendingBonus,
        uint256 boostMultiplier,
        bool isActive,
        uint256 timeRemaining
    ) {
        StakePosition memory pos = positions[user];
        uint256 remaining = pos.isActive && block.timestamp < pos.unlockTime 
            ? pos.unlockTime - block.timestamp : 0;
        
        return (
            pos.amount,
            pos.startTime,
            pos.unlockTime,
            calculateReward(user),
            calculateBonus(user),
            getBoostMultiplier(user),
            pos.isActive,
            remaining
        );
    }
    
    function getContractStats() external view returns (
        uint256 _totalStaked,
        uint256 _totalRewards,
        uint256 _eesPool,
        uint256 _apr,
        uint256 _stakers
    ) {
        return (totalStaked, totalRewardsDistributed, eesPoolTotal, DIAMOND_APR, totalStakers);
    }
    
    function canVote(address user) public view returns (bool) {
        return isVerifiedStaker[user] || dtgcToken.balanceOf(user) >= MIN_TOKENS_FOR_VOTING;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         STAKING FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function stake(uint256 amount) external {
        require(amount > 0, "ZERO_AMOUNT");
        require(!positions[msg.sender].isActive, "POSITION_EXISTS");
        
        require(lpToken.transferFrom(msg.sender, address(this), amount), "TRANSFER_FAILED");
        
        // Entry fees on LP: 1% dev, 4% DAO
        uint256 devFee = (amount * DEV_FEE_SHARE) / BASIS_POINTS;
        uint256 daoFee = (amount * DAO_FEE_SHARE) / BASIS_POINTS;
        uint256 principal = amount - devFee - daoFee;
        
        require(lpToken.transfer(devWallet, devFee), "DEV_FEE_FAILED");
        require(lpToken.transfer(daoTreasury, daoFee), "DAO_FEE_FAILED");
        
        positions[msg.sender] = StakePosition({
            amount: principal,
            startTime: block.timestamp,
            unlockTime: block.timestamp + DIAMOND_LOCK,
            rewardDebt: 0,
            isActive: true
        });
        
        totalStaked += principal;
        
        if (!isVerifiedStaker[msg.sender]) {
            isVerifiedStaker[msg.sender] = true;
            totalStakers++;
        }
        
        emit Staked(msg.sender, amount, principal, block.timestamp + DIAMOND_LOCK);
    }
    
    function withdraw() external {
        StakePosition storage pos = positions[msg.sender];
        require(pos.isActive, "NO_POSITION");
        require(block.timestamp >= pos.unlockTime, "STILL_LOCKED");
        
        uint256 principal = pos.amount;
        uint256 reward = calculateReward(msg.sender);
        uint256 bonus = calculateBonus(msg.sender);
        uint256 totalReward = reward + bonus;
        
        // Exit fees on LP: 1% dev, 4% DAO
        uint256 devFee = (principal * DEV_FEE_SHARE) / BASIS_POINTS;
        uint256 daoFee = (principal * DAO_FEE_SHARE) / BASIS_POINTS;
        uint256 finalPrincipal = principal - devFee - daoFee;
        
        totalStaked -= principal;
        totalRewardsDistributed += totalReward;
        lifetimeRewards[msg.sender] += totalReward;
        pos.isActive = false;
        pos.amount = 0;
        
        require(lpToken.transfer(devWallet, devFee), "DEV_FEE_FAILED");
        require(lpToken.transfer(daoTreasury, daoFee), "DAO_FEE_FAILED");
        require(lpToken.transfer(msg.sender, finalPrincipal), "LP_TRANSFER_FAILED");
        
        if (totalReward > 0) {
            require(rewardToken.transfer(msg.sender, totalReward), "REWARD_TRANSFER_FAILED");
        }
        
        emit Withdrawn(msg.sender, finalPrincipal, totalReward, devFee + daoFee);
    }
    
    /**
     * @notice Emergency End Stake (EES) - 20% penalty on LP
     * @dev 2% to dev, 18% to DAO voting pool
     * @dev DAO votes on: A) Buy/burn B) Liquidity C) Treasury D) All
     */
    function emergencyWithdraw() external {
        StakePosition storage pos = positions[msg.sender];
        require(pos.isActive, "NO_POSITION");
        
        uint256 principal = pos.amount;
        
        // EES penalties: 2% dev, 18% DAO voting
        uint256 devPenalty = (principal * EES_DEV_SHARE) / BASIS_POINTS;
        uint256 daoPenalty = (principal * EES_DAO_SHARE) / BASIS_POINTS;
        uint256 returnAmount = principal - devPenalty - daoPenalty;
        
        totalStaked -= principal;
        eesPoolTotal += daoPenalty;
        pos.isActive = false;
        pos.amount = 0;
        
        require(lpToken.transfer(devWallet, devPenalty), "DEV_PENALTY_FAILED");
        require(lpToken.transfer(daoVotingPool, daoPenalty), "DAO_PENALTY_FAILED");
        require(lpToken.transfer(msg.sender, returnAmount), "TRANSFER_FAILED");
        
        emit EmergencyWithdrawn(msg.sender, returnAmount, devPenalty, daoPenalty);
        emit EESCollected(devPenalty, daoPenalty);
    }
    
    function claimRewards() external {
        StakePosition storage pos = positions[msg.sender];
        require(pos.isActive, "NO_POSITION");
        
        uint256 reward = calculateReward(msg.sender);
        require(reward > 0, "NO_REWARDS");
        
        pos.rewardDebt += reward;
        pos.startTime = block.timestamp;
        totalRewardsDistributed += reward;
        lifetimeRewards[msg.sender] += reward;
        
        require(rewardToken.transfer(msg.sender, reward), "TRANSFER_FAILED");
        
        emit RewardsClaimed(msg.sender, reward);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         ADMIN
    // ═══════════════════════════════════════════════════════════════
    
    modifier onlyOwner() { require(msg.sender == owner, "NOT_OWNER"); _; }
    
    function setDevWallet(address _dev) external onlyOwner { devWallet = _dev; }
    function setDaoTreasury(address _dao) external onlyOwner { daoTreasury = _dao; }
    function setDaoVotingPool(address _voting) external onlyOwner { daoVotingPool = _voting; }
    function transferOwnership(address _new) external onlyOwner { owner = _new; }
    
    function fundRewards(uint256 amount) external onlyOwner {
        require(rewardToken.transferFrom(msg.sender, address(this), amount), "FUND_FAILED");
    }
    
    function recoverToken(address token, uint256 amount) external onlyOwner {
        if (token == address(lpToken)) {
            require(amount <= lpToken.balanceOf(address(this)) - totalStaked, "PROTECTED");
        }
        IPRC20(token).transfer(owner, amount);
    }
}
