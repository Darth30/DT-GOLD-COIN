// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║                    DTGC STAKING - dump.tires                  ║
    ║                                                               ║
    ║  PulseChain Staking Contract for DTGC Token                   ║
    ║  Token: 0xD0676B28a457371D58d47E5247b439114e40Eb0F           ║
    ║                                                               ║
    ║  Features:                                                    ║
    ║  - Tiered APR based on lock duration (14/30/90 days)         ║
    ║  - Entry fee: 5% (redistributed to stakers)                  ║
    ║  - Exit fee: 5% (normal) / 20% (emergency)                   ║
    ║  - DAO integration for reward distribution                    ║
    ║  - Diamond hands bonus for longer locks                       ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

interface IPRC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

library SafePRC20 {
    function safeTransfer(IPRC20 token, address to, uint256 value) internal {
        require(token.transfer(to, value), "TRANSFER_FAILED");
    }

    function safeTransferFrom(IPRC20 token, address from, address to, uint256 value) internal {
        require(token.transferFrom(from, to, value), "TRANSFER_FROM_FAILED");
    }
}

contract DTGCStaking {
    using SafePRC20 for IPRC20;

    // ═══════════════════════════════════════════════════════════════
    //                         STATE VARIABLES
    // ═══════════════════════════════════════════════════════════════
    
    IPRC20 public immutable dtgcToken;
    
    address public owner;
    address public feeRecipient;        // DAO Treasury for fee redistribution
    address public rewardPool;          // 200M DTGC reward pool address
    
    // Total staked across all users (for fee distribution calculation)
    uint256 public totalStaked;
    uint256 public totalRewardsDistributed;
    
    // Fee Redistribution Pool (accumulated entry fees for stakers)
    uint256 public feePool;
    uint256 public accFeePerShare;      // Accumulated fees per share (scaled by 1e18)
    
    // ═══════════════════════════════════════════════════════════════
    //                           CONSTANTS
    // ═══════════════════════════════════════════════════════════════
    
    uint16 public constant BPS_DENOM = 10_000;
    
    // Fee structure
    uint16 public constant ENTRY_FEE_BPS = 500;           // 5%
    uint16 public constant EXIT_FEE_BPS = 500;            // 5%
    uint16 public constant EMERGENCY_PENALTY_BPS = 2000;  // 20%
    
    // Tiered APR based on lock duration (annual percentage)
    uint16 public constant APR_14_DAYS = 500;    // 5% APR
    uint16 public constant APR_30_DAYS = 1200;   // 12% APR  
    uint16 public constant APR_90_DAYS = 2500;   // 25% APR
    
    // Diamond Hands Bonus (additional APR for completing full lock)
    uint16 public constant DIAMOND_BONUS_14 = 100;   // +1%
    uint16 public constant DIAMOND_BONUS_30 = 300;   // +3%
    uint16 public constant DIAMOND_BONUS_90 = 800;   // +8%
    
    uint256 public constant SECONDS_PER_YEAR = 365 days;
    uint256 public constant PRECISION = 1e18;
    
    // Lock durations
    uint256 public constant LOCK_14_DAYS = 14 days;
    uint256 public constant LOCK_30_DAYS = 30 days;
    uint256 public constant LOCK_90_DAYS = 90 days;
    
    // ═══════════════════════════════════════════════════════════════
    //                           STRUCTS
    // ═══════════════════════════════════════════════════════════════
    
    struct Position {
        uint256 amount;           // Principal after entry fee
        uint256 startTime;        // Stake timestamp
        uint256 unlockTime;       // When lock expires
        uint256 lockPeriod;       // Lock duration chosen
        uint256 aprBps;           // APR for this position
        uint256 diamondBonus;     // Bonus APR if held to completion
        uint256 feeDebt;          // Fee pool debt for this position
        uint256 claimedRewards;   // Total rewards already claimed
        bool isActive;            // Position exists
    }
    
    struct StakingTier {
        uint256 lockDuration;
        uint16 aprBps;
        uint16 diamondBonus;
        string tierName;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                          MAPPINGS
    // ═══════════════════════════════════════════════════════════════
    
    mapping(address => Position) public positions;
    mapping(address => uint256) public lifetimeRewards;     // Track total earned
    mapping(address => uint256) public lifetimeStaked;      // Track total staked
    
    // ═══════════════════════════════════════════════════════════════
    //                           EVENTS
    // ═══════════════════════════════════════════════════════════════
    
    event Staked(
        address indexed user,
        uint256 grossAmount,
        uint256 entryFee,
        uint256 principal,
        uint256 lockPeriod,
        uint256 aprBps,
        uint256 unlockTime
    );
    
    event Withdrawn(
        address indexed user,
        uint256 principal,
        uint256 rewards,
        uint256 feeShareRewards,
        uint256 exitFee,
        uint256 netPayout
    );
    
    event EmergencyWithdrawn(
        address indexed user,
        uint256 principal,
        uint256 penalty,
        uint256 netPayout
    );
    
    event RewardsClaimed(
        address indexed user,
        uint256 baseRewards,
        uint256 feeShareRewards,
        uint256 diamondBonus
    );
    
    event FeePoolUpdated(uint256 newFeePool, uint256 accFeePerShare);
    event RewardPoolFunded(address indexed funder, uint256 amount);
    event OwnershipTransferred(address indexed oldOwner, address indexed newOwner);
    event FeeRecipientUpdated(address indexed newRecipient);
    
    // ═══════════════════════════════════════════════════════════════
    //                          MODIFIERS
    // ═══════════════════════════════════════════════════════════════
    
    modifier onlyOwner() {
        require(msg.sender == owner, "NOT_OWNER");
        _;
    }
    
    modifier hasPosition() {
        require(positions[msg.sender].isActive, "NO_ACTIVE_POSITION");
        _;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════
    
    constructor(
        address _dtgcToken,
        address _feeRecipient,
        address _rewardPool
    ) {
        require(_dtgcToken != address(0), "TOKEN_ZERO");
        require(_feeRecipient != address(0), "FEE_RECIPIENT_ZERO");
        
        dtgcToken = IPRC20(_dtgcToken);
        owner = msg.sender;
        feeRecipient = _feeRecipient;
        rewardPool = _rewardPool;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                      STAKING FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Stake DTGC tokens with chosen lock duration
     * @param amount Gross amount to stake (before fees)
     * @param lockChoice 0=14 days, 1=30 days, 2=90 days
     */
    function stake(uint256 amount, uint8 lockChoice) external {
        require(amount > 0, "AMOUNT_ZERO");
        require(!positions[msg.sender].isActive, "POSITION_EXISTS");
        require(lockChoice <= 2, "INVALID_LOCK_CHOICE");
        
        // Get tier details
        StakingTier memory tier = _getTier(lockChoice);
        
        // Calculate entry fee (5%)
        uint256 entryFee = (amount * ENTRY_FEE_BPS) / BPS_DENOM;
        uint256 principal = amount - entryFee;
        
        // Transfer tokens from user
        dtgcToken.safeTransferFrom(msg.sender, address(this), amount);
        
        // Distribute entry fee: 50% to fee pool (stakers), 50% to DAO treasury
        uint256 feeToPool = entryFee / 2;
        uint256 feeToDAO = entryFee - feeToPool;
        
        // Update fee pool for existing stakers
        if (totalStaked > 0) {
            accFeePerShare += (feeToPool * PRECISION) / totalStaked;
        }
        feePool += feeToPool;
        
        // Send DAO portion
        if (feeToDAO > 0) {
            dtgcToken.safeTransfer(feeRecipient, feeToDAO);
        }
        
        // Create position
        uint256 unlockTime = block.timestamp + tier.lockDuration;
        
        positions[msg.sender] = Position({
            amount: principal,
            startTime: block.timestamp,
            unlockTime: unlockTime,
            lockPeriod: tier.lockDuration,
            aprBps: tier.aprBps,
            diamondBonus: tier.diamondBonus,
            feeDebt: (principal * accFeePerShare) / PRECISION,
            claimedRewards: 0,
            isActive: true
        });
        
        totalStaked += principal;
        lifetimeStaked[msg.sender] += amount;
        
        emit Staked(
            msg.sender,
            amount,
            entryFee,
            principal,
            tier.lockDuration,
            tier.aprBps,
            unlockTime
        );
        
        emit FeePoolUpdated(feePool, accFeePerShare);
    }
    
    /**
     * @notice Withdraw staked tokens after lock expires
     */
    function withdraw() external hasPosition {
        Position storage pos = positions[msg.sender];
        require(block.timestamp >= pos.unlockTime, "STILL_LOCKED");
        
        uint256 principal = pos.amount;
        
        // Calculate all rewards
        (uint256 baseRewards, uint256 feeShare, uint256 diamond) = calculateAllRewards(msg.sender);
        uint256 totalRewards = baseRewards + feeShare + diamond;
        
        // Calculate exit fee on principal only
        uint256 exitFee = (principal * EXIT_FEE_BPS) / BPS_DENOM;
        uint256 netPrincipal = principal - exitFee;
        
        // Total payout
        uint256 totalPayout = netPrincipal + totalRewards;
        
        // Update state
        totalStaked -= principal;
        lifetimeRewards[msg.sender] += totalRewards;
        totalRewardsDistributed += totalRewards;
        
        // Clear position
        delete positions[msg.sender];
        
        // Send exit fee to DAO
        if (exitFee > 0) {
            dtgcToken.safeTransfer(feeRecipient, exitFee);
        }
        
        // Send payout to user
        dtgcToken.safeTransfer(msg.sender, totalPayout);
        
        emit Withdrawn(
            msg.sender,
            principal,
            baseRewards,
            feeShare,
            exitFee,
            totalPayout
        );
    }
    
    /**
     * @notice Emergency withdraw before lock expires (20% penalty)
     */
    function emergencyWithdraw() external hasPosition {
        Position storage pos = positions[msg.sender];
        require(block.timestamp < pos.unlockTime, "USE_NORMAL_WITHDRAW");
        
        uint256 principal = pos.amount;
        
        // 20% penalty on principal (no rewards)
        uint256 penalty = (principal * EMERGENCY_PENALTY_BPS) / BPS_DENOM;
        uint256 netPayout = principal - penalty;
        
        // Update state
        totalStaked -= principal;
        
        // Clear position
        delete positions[msg.sender];
        
        // Send penalty to DAO treasury
        dtgcToken.safeTransfer(feeRecipient, penalty);
        
        // Send remaining to user
        dtgcToken.safeTransfer(msg.sender, netPayout);
        
        emit EmergencyWithdrawn(msg.sender, principal, penalty, netPayout);
    }
    
    /**
     * @notice Claim accumulated rewards without unstaking
     */
    function claimRewards() external hasPosition {
        Position storage pos = positions[msg.sender];
        
        (uint256 baseRewards, uint256 feeShare, uint256 diamond) = calculateAllRewards(msg.sender);
        uint256 totalClaimable = baseRewards + feeShare + diamond;
        
        require(totalClaimable > 0, "NO_REWARDS");
        
        // Update claimed amount
        pos.claimedRewards += totalClaimable;
        pos.feeDebt = (pos.amount * accFeePerShare) / PRECISION;
        
        lifetimeRewards[msg.sender] += totalClaimable;
        totalRewardsDistributed += totalClaimable;
        
        dtgcToken.safeTransfer(msg.sender, totalClaimable);
        
        emit RewardsClaimed(msg.sender, baseRewards, feeShare, diamond);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                      VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Calculate all pending rewards for a user
     */
    function calculateAllRewards(address user) public view returns (
        uint256 baseRewards,
        uint256 feeShareRewards,
        uint256 diamondBonus
    ) {
        Position memory pos = positions[user];
        if (!pos.isActive) return (0, 0, 0);
        
        // Base APR rewards
        uint256 timeStaked = block.timestamp - pos.startTime;
        baseRewards = (pos.amount * pos.aprBps * timeStaked) / (BPS_DENOM * SECONDS_PER_YEAR);
        
        // Fee share rewards (from entry fees of other stakers)
        uint256 accumulatedFees = (pos.amount * accFeePerShare) / PRECISION;
        feeShareRewards = accumulatedFees > pos.feeDebt ? accumulatedFees - pos.feeDebt : 0;
        
        // Diamond hands bonus (only if lock completed)
        if (block.timestamp >= pos.unlockTime) {
            diamondBonus = (pos.amount * pos.diamondBonus * pos.lockPeriod) / (BPS_DENOM * SECONDS_PER_YEAR);
        }
        
        // Subtract already claimed
        uint256 totalPending = baseRewards + feeShareRewards + diamondBonus;
        if (totalPending > pos.claimedRewards) {
            uint256 remaining = totalPending - pos.claimedRewards;
            // Proportionally reduce each component
            if (totalPending > 0) {
                baseRewards = (baseRewards * remaining) / totalPending;
                feeShareRewards = (feeShareRewards * remaining) / totalPending;
                diamondBonus = (diamondBonus * remaining) / totalPending;
            }
        } else {
            return (0, 0, 0);
        }
    }
    
    /**
     * @notice Get position details for a user
     */
    function getPosition(address user) external view returns (
        uint256 amount,
        uint256 startTime,
        uint256 unlockTime,
        uint256 lockPeriod,
        uint256 aprBps,
        uint256 diamondBonus,
        bool isActive,
        uint256 timeRemaining
    ) {
        Position memory pos = positions[user];
        return (
            pos.amount,
            pos.startTime,
            pos.unlockTime,
            pos.lockPeriod,
            pos.aprBps,
            pos.diamondBonus,
            pos.isActive,
            pos.unlockTime > block.timestamp ? pos.unlockTime - block.timestamp : 0
        );
    }
    
    /**
     * @notice Get all tier information
     */
    function getTiers() external pure returns (StakingTier[3] memory) {
        return [
            StakingTier(LOCK_14_DAYS, APR_14_DAYS, DIAMOND_BONUS_14, "Bronze"),
            StakingTier(LOCK_30_DAYS, APR_30_DAYS, DIAMOND_BONUS_30, "Silver"),
            StakingTier(LOCK_90_DAYS, APR_90_DAYS, DIAMOND_BONUS_90, "Diamond")
        ];
    }
    
    /**
     * @notice Get contract stats
     */
    function getContractStats() external view returns (
        uint256 _totalStaked,
        uint256 _totalRewardsDistributed,
        uint256 _feePool,
        uint256 _contractBalance
    ) {
        return (
            totalStaked,
            totalRewardsDistributed,
            feePool,
            dtgcToken.balanceOf(address(this))
        );
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                     INTERNAL FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function _getTier(uint8 choice) internal pure returns (StakingTier memory) {
        if (choice == 0) {
            return StakingTier(LOCK_14_DAYS, APR_14_DAYS, DIAMOND_BONUS_14, "Bronze");
        } else if (choice == 1) {
            return StakingTier(LOCK_30_DAYS, APR_30_DAYS, DIAMOND_BONUS_30, "Silver");
        } else {
            return StakingTier(LOCK_90_DAYS, APR_90_DAYS, DIAMOND_BONUS_90, "Diamond");
        }
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                      ADMIN FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Fund the reward pool (for DAO to add 200M DTGC)
     */
    function fundRewardPool(uint256 amount) external {
        require(amount > 0, "AMOUNT_ZERO");
        dtgcToken.safeTransferFrom(msg.sender, address(this), amount);
        emit RewardPoolFunded(msg.sender, amount);
    }
    
    function setFeeRecipient(address newRecipient) external onlyOwner {
        require(newRecipient != address(0), "ZERO_ADDRESS");
        feeRecipient = newRecipient;
        emit FeeRecipientUpdated(newRecipient);
    }
    
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "ZERO_ADDRESS");
        address oldOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
    
    /**
     * @notice Emergency function to recover stuck tokens (not staked tokens)
     */
    function recoverTokens(address token, uint256 amount) external onlyOwner {
        require(token != address(dtgcToken) || amount <= dtgcToken.balanceOf(address(this)) - totalStaked, "CANNOT_RECOVER_STAKED");
        IPRC20(token).safeTransfer(owner, amount);
    }
}
