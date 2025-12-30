// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║              DTGC STAKING V2 - dump.tires                     ║
    ║                                                               ║
    ║  Tiered staking: Bronze 2.5% | Silver 6% | Gold 9%           ║
    ║  Entry/Exit: 1% dev + 4% DAO                                 ║
    ║  EES (Emergency): 2% dev + 18% DAO voting pool               ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

interface IPRC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract DTGCStakingV2 {
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTANTS
    // ═══════════════════════════════════════════════════════════════
    
    // Entry/Exit fees (5% total)
    uint256 public constant ENTRY_FEE = 500;
    uint256 public constant EXIT_FEE = 500;
    uint256 public constant DEV_FEE_SHARE = 100;    // 1%
    uint256 public constant DAO_FEE_SHARE = 400;    // 4%
    
    // Emergency End Stake (EES) - 20% total
    uint256 public constant EES_PENALTY = 2000;      // 20% total
    uint256 public constant EES_DEV_SHARE = 200;     // 2% to dev
    uint256 public constant EES_DAO_SHARE = 1800;    // 18% to DAO voting
    
    uint256 public constant BASIS_POINTS = 10000;
    
    // Voting eligibility threshold
    uint256 public constant MIN_TOKENS_FOR_VOTING = 1_000_000 * 1e18;
    
    // Staking tiers
    uint256 public constant BRONZE_LOCK = 14 days;
    uint256 public constant SILVER_LOCK = 30 days;
    uint256 public constant GOLD_LOCK = 90 days;
    
    uint256 public constant BRONZE_APR = 250;   // 2.5%
    uint256 public constant SILVER_APR = 600;   // 6%
    uint256 public constant GOLD_APR = 900;     // 9%
    
    uint256 public constant BRONZE_BONUS = 50;  // 0.5%
    uint256 public constant SILVER_BONUS = 150; // 1.5%
    uint256 public constant GOLD_BONUS = 400;   // 4%
    
    // ═══════════════════════════════════════════════════════════════
    //                         STATE
    // ═══════════════════════════════════════════════════════════════
    
    IPRC20 public immutable dtgcToken;
    
    address public owner;
    address public devWallet;
    address public daoTreasury;
    address public daoVotingPool;  // EES fees go here for voting
    
    uint256 public totalStaked;
    uint256 public totalRewardsDistributed;
    uint256 public feePool;
    uint256 public eesPoolTotal;  // Total EES collected for DAO voting
    uint256 public totalStakers;
    
    struct StakePosition {
        uint256 amount;
        uint256 startTime;
        uint256 unlockTime;
        uint256 lockPeriod;
        uint256 aprBps;
        uint256 diamondBonus;
        bool isActive;
    }
    
    mapping(address => StakePosition) public positions;
    mapping(address => uint256) public lifetimeRewards;
    mapping(address => uint256) public lifetimeStaked;
    mapping(address => uint256) public feeShareClaimed;
    mapping(address => bool) public isVerifiedStaker;
    
    uint256 public accFeePerShare;
    
    // ═══════════════════════════════════════════════════════════════
    //                         EVENTS
    // ═══════════════════════════════════════════════════════════════
    
    event Staked(address indexed user, uint256 amount, uint256 principal, uint8 tier, uint256 unlockTime);
    event Withdrawn(address indexed user, uint256 amount, uint256 rewards, uint256 fee);
    event EmergencyWithdrawn(address indexed user, uint256 returned, uint256 devFee, uint256 daoVotingFee);
    event RewardsClaimed(address indexed user, uint256 baseReward, uint256 feeShare, uint256 bonus);
    event FeesDistributed(uint256 devAmount, uint256 daoAmount, uint256 stakerAmount);
    event EESCollected(uint256 devAmount, uint256 daoVotingAmount);
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════
    
    constructor(
        address _dtgcToken,
        address _devWallet,
        address _daoTreasury,
        address _daoVotingPool
    ) {
        require(_dtgcToken != address(0), "INVALID_TOKEN");
        require(_devWallet != address(0), "INVALID_DEV");
        require(_daoTreasury != address(0), "INVALID_DAO");
        require(_daoVotingPool != address(0), "INVALID_VOTING");
        
        dtgcToken = IPRC20(_dtgcToken);
        devWallet = _devWallet;
        daoTreasury = _daoTreasury;
        daoVotingPool = _daoVotingPool;
        owner = msg.sender;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function getTiers() external pure returns (
        string[3] memory names,
        uint256[3] memory locks,
        uint256[3] memory aprs,
        uint256[3] memory bonuses
    ) {
        return (
            ["Bronze", "Silver", "Gold"],
            [BRONZE_LOCK, SILVER_LOCK, GOLD_LOCK],
            [BRONZE_APR, SILVER_APR, GOLD_APR],
            [BRONZE_BONUS, SILVER_BONUS, GOLD_BONUS]
        );
    }
    
    function getPosition(address user) external view returns (
        uint256 amount,
        uint256 startTime,
        uint256 unlockTime,
        uint256 lockPeriod,
        uint256 aprBps,
        uint256 bonus,
        bool isActive,
        uint256 timeRemaining
    ) {
        StakePosition memory pos = positions[user];
        uint256 remaining = 0;
        if (pos.isActive && block.timestamp < pos.unlockTime) {
            remaining = pos.unlockTime - block.timestamp;
        }
        return (pos.amount, pos.startTime, pos.unlockTime, pos.lockPeriod, pos.aprBps, pos.diamondBonus, pos.isActive, remaining);
    }
    
    function calculateBaseReward(address user) public view returns (uint256) {
        StakePosition memory pos = positions[user];
        if (!pos.isActive || pos.amount == 0) return 0;
        
        uint256 duration = block.timestamp - pos.startTime;
        return (pos.amount * pos.aprBps * duration) / (BASIS_POINTS * 365 days);
    }
    
    function calculateFeeShareReward(address user) public view returns (uint256) {
        StakePosition memory pos = positions[user];
        if (!pos.isActive || pos.amount == 0) return 0;
        return (pos.amount * accFeePerShare / 1e18) - feeShareClaimed[user];
    }
    
    function calculateBonus(address user) public view returns (uint256) {
        StakePosition memory pos = positions[user];
        if (!pos.isActive || block.timestamp < pos.unlockTime) return 0;
        return (pos.amount * pos.diamondBonus) / BASIS_POINTS;
    }
    
    function calculateAllRewards(address user) external view returns (uint256 base, uint256 feeShare, uint256 bonus) {
        return (calculateBaseReward(user), calculateFeeShareReward(user), calculateBonus(user));
    }
    
    function getContractStats() external view returns (
        uint256 _totalStaked,
        uint256 _totalRewards,
        uint256 _feePool,
        uint256 _eesPool,
        uint256 _stakers
    ) {
        return (totalStaked, totalRewardsDistributed, feePool, eesPoolTotal, totalStakers);
    }
    
    /**
     * @notice Check if address can vote on DAO proposals
     * @dev Must be verified staker OR hold 1M+ DTGC
     */
    function canVote(address user) public view returns (bool) {
        return isVerifiedStaker[user] || dtgcToken.balanceOf(user) >= MIN_TOKENS_FOR_VOTING;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         STAKING FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function stake(uint256 amount, uint8 tier) external {
        require(amount > 0, "ZERO_AMOUNT");
        require(tier <= 2, "INVALID_TIER");
        require(!positions[msg.sender].isActive, "POSITION_EXISTS");
        
        require(dtgcToken.transferFrom(msg.sender, address(this), amount), "TRANSFER_FAILED");
        
        // Entry fees: 1% dev, 4% DAO (half to stakers)
        uint256 devFee = (amount * DEV_FEE_SHARE) / BASIS_POINTS;
        uint256 daoFee = (amount * DAO_FEE_SHARE) / BASIS_POINTS;
        uint256 stakerFee = daoFee / 2;
        uint256 principal = amount - devFee - daoFee;
        
        require(dtgcToken.transfer(devWallet, devFee), "DEV_FEE_FAILED");
        require(dtgcToken.transfer(daoTreasury, daoFee - stakerFee), "DAO_FEE_FAILED");
        
        feePool += stakerFee;
        if (totalStaked > 0) {
            accFeePerShare += (stakerFee * 1e18) / totalStaked;
        }
        
        emit FeesDistributed(devFee, daoFee - stakerFee, stakerFee);
        
        // Get tier params
        (uint256 lock, uint256 apr, uint256 bonus) = _getTierParams(tier);
        
        positions[msg.sender] = StakePosition({
            amount: principal,
            startTime: block.timestamp,
            unlockTime: block.timestamp + lock,
            lockPeriod: lock,
            aprBps: apr,
            diamondBonus: bonus,
            isActive: true
        });
        
        totalStaked += principal;
        lifetimeStaked[msg.sender] += principal;
        feeShareClaimed[msg.sender] = (principal * accFeePerShare) / 1e18;
        
        if (!isVerifiedStaker[msg.sender]) {
            isVerifiedStaker[msg.sender] = true;
            totalStakers++;
        }
        
        emit Staked(msg.sender, amount, principal, tier, block.timestamp + lock);
    }
    
    function withdraw() external {
        StakePosition storage pos = positions[msg.sender];
        require(pos.isActive, "NO_POSITION");
        require(block.timestamp >= pos.unlockTime, "STILL_LOCKED");
        
        uint256 principal = pos.amount;
        uint256 rewards = calculateBaseReward(msg.sender) + calculateFeeShareReward(msg.sender) + calculateBonus(msg.sender);
        
        // Exit fees: 1% dev, 4% DAO
        uint256 devFee = (principal * DEV_FEE_SHARE) / BASIS_POINTS;
        uint256 daoFee = (principal * DAO_FEE_SHARE) / BASIS_POINTS;
        uint256 finalPrincipal = principal - devFee - daoFee;
        
        totalStaked -= principal;
        totalRewardsDistributed += rewards;
        lifetimeRewards[msg.sender] += rewards;
        pos.isActive = false;
        pos.amount = 0;
        
        require(dtgcToken.transfer(devWallet, devFee), "DEV_FEE_FAILED");
        require(dtgcToken.transfer(daoTreasury, daoFee), "DAO_FEE_FAILED");
        require(dtgcToken.transfer(msg.sender, finalPrincipal + rewards), "TRANSFER_FAILED");
        
        emit Withdrawn(msg.sender, finalPrincipal, rewards, devFee + daoFee);
    }
    
    /**
     * @notice Emergency End Stake (EES)
     * @dev 20% penalty: 2% to dev, 18% to DAO voting pool
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
        
        require(dtgcToken.transfer(devWallet, devPenalty), "DEV_PENALTY_FAILED");
        require(dtgcToken.transfer(daoVotingPool, daoPenalty), "DAO_PENALTY_FAILED");
        require(dtgcToken.transfer(msg.sender, returnAmount), "TRANSFER_FAILED");
        
        emit EmergencyWithdrawn(msg.sender, returnAmount, devPenalty, daoPenalty);
        emit EESCollected(devPenalty, daoPenalty);
    }
    
    function claimRewards() external {
        StakePosition storage pos = positions[msg.sender];
        require(pos.isActive, "NO_POSITION");
        
        uint256 rewards = calculateBaseReward(msg.sender) + calculateFeeShareReward(msg.sender);
        require(rewards > 0, "NO_REWARDS");
        
        pos.startTime = block.timestamp;
        feeShareClaimed[msg.sender] = (pos.amount * accFeePerShare) / 1e18;
        totalRewardsDistributed += rewards;
        lifetimeRewards[msg.sender] += rewards;
        
        require(dtgcToken.transfer(msg.sender, rewards), "TRANSFER_FAILED");
        
        emit RewardsClaimed(msg.sender, rewards, 0, 0);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         INTERNAL
    // ═══════════════════════════════════════════════════════════════
    
    function _getTierParams(uint8 tier) internal pure returns (uint256, uint256, uint256) {
        if (tier == 0) return (BRONZE_LOCK, BRONZE_APR, BRONZE_BONUS);
        if (tier == 1) return (SILVER_LOCK, SILVER_APR, SILVER_BONUS);
        return (GOLD_LOCK, GOLD_APR, GOLD_BONUS);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         ADMIN
    // ═══════════════════════════════════════════════════════════════
    
    modifier onlyOwner() { require(msg.sender == owner, "NOT_OWNER"); _; }
    
    function setDevWallet(address _dev) external onlyOwner { devWallet = _dev; }
    function setDaoTreasury(address _dao) external onlyOwner { daoTreasury = _dao; }
    function setDaoVotingPool(address _voting) external onlyOwner { daoVotingPool = _voting; }
    function transferOwnership(address _new) external onlyOwner { owner = _new; }
    
    function recoverToken(address token, uint256 amount) external onlyOwner {
        require(token != address(dtgcToken) || amount <= dtgcToken.balanceOf(address(this)) - totalStaked, "PROTECTED");
        IPRC20(token).transfer(owner, amount);
    }
}
