// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║              DTGC LP STAKING - dump.tires                     ║
    ║                                                               ║
    ║  Stake URMOM/DTGC LP tokens to earn DTGC rewards              ║
    ║  Incentivizes liquidity provision for the ecosystem           ║
    ║                                                               ║
    ║  LP Token: URMOM/DTGC PLP (PulseX LP)                        ║
    ║  Reward Token: DTGC                                           ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

interface IPRC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
}

interface IPulseXPair {
    function token0() external view returns (address);
    function token1() external view returns (address);
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function totalSupply() external view returns (uint256);
}

contract DTGCLPStaking {
    
    // ═══════════════════════════════════════════════════════════════
    //                         STATE VARIABLES
    // ═══════════════════════════════════════════════════════════════
    
    IPRC20 public immutable lpToken;          // URMOM/DTGC LP token
    IPRC20 public immutable rewardToken;      // DTGC for rewards
    
    address public owner;
    address public treasury;                   // DAO Treasury for funding
    
    // Reward configuration
    uint256 public rewardRate;                 // DTGC per second
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;
    uint256 public rewardsDuration = 90 days;  // Reward period
    uint256 public periodFinish;
    
    // Staking state
    uint256 public totalStaked;
    
    // Boost multipliers for long-term stakers
    uint256 public constant BOOST_PRECISION = 10000;
    uint256 public constant MAX_BOOST = 20000;  // 2x max boost
    uint256 public constant BOOST_PERIOD = 90 days;  // Time to reach max boost
    
    // User data
    struct UserInfo {
        uint256 amount;              // LP tokens staked
        uint256 rewardPerTokenPaid;  // Reward debt
        uint256 rewards;             // Pending rewards
        uint256 stakeTime;           // When user staked (for boost calc)
        uint256 claimedRewards;      // Total claimed
    }
    
    mapping(address => UserInfo) public userInfo;
    
    // ═══════════════════════════════════════════════════════════════
    //                           EVENTS
    // ═══════════════════════════════════════════════════════════════
    
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 reward);
    event RewardAdded(uint256 reward);
    event RewardsDurationUpdated(uint256 newDuration);
    event OwnershipTransferred(address indexed oldOwner, address indexed newOwner);
    event TreasuryUpdated(address indexed newTreasury);
    
    // ═══════════════════════════════════════════════════════════════
    //                          MODIFIERS
    // ═══════════════════════════════════════════════════════════════
    
    modifier onlyOwner() {
        require(msg.sender == owner, "NOT_OWNER");
        _;
    }
    
    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = lastTimeRewardApplicable();
        
        if (account != address(0)) {
            UserInfo storage user = userInfo[account];
            user.rewards = earned(account);
            user.rewardPerTokenPaid = rewardPerTokenStored;
        }
        _;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════
    
    constructor(
        address _lpToken,
        address _rewardToken,
        address _treasury
    ) {
        require(_lpToken != address(0), "LP_TOKEN_ZERO");
        require(_rewardToken != address(0), "REWARD_TOKEN_ZERO");
        require(_treasury != address(0), "TREASURY_ZERO");
        
        lpToken = IPRC20(_lpToken);
        rewardToken = IPRC20(_rewardToken);
        treasury = _treasury;
        owner = msg.sender;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                      VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function lastTimeRewardApplicable() public view returns (uint256) {
        return block.timestamp < periodFinish ? block.timestamp : periodFinish;
    }
    
    function rewardPerToken() public view returns (uint256) {
        if (totalStaked == 0) {
            return rewardPerTokenStored;
        }
        return rewardPerTokenStored + (
            (lastTimeRewardApplicable() - lastUpdateTime) * rewardRate * 1e18 / totalStaked
        );
    }
    
    /**
     * @notice Calculate boost multiplier based on stake duration
     * @param account User address
     * @return Boost multiplier (10000 = 1x, 20000 = 2x)
     */
    function getBoostMultiplier(address account) public view returns (uint256) {
        UserInfo memory user = userInfo[account];
        if (user.amount == 0 || user.stakeTime == 0) {
            return BOOST_PRECISION; // 1x
        }
        
        uint256 stakeDuration = block.timestamp - user.stakeTime;
        if (stakeDuration >= BOOST_PERIOD) {
            return MAX_BOOST; // 2x
        }
        
        // Linear boost: 1x -> 2x over 90 days
        uint256 boost = BOOST_PRECISION + (BOOST_PRECISION * stakeDuration / BOOST_PERIOD);
        return boost > MAX_BOOST ? MAX_BOOST : boost;
    }
    
    /**
     * @notice Calculate earned rewards for a user (with boost)
     */
    function earned(address account) public view returns (uint256) {
        UserInfo memory user = userInfo[account];
        uint256 baseReward = (
            user.amount * (rewardPerToken() - user.rewardPerTokenPaid) / 1e18
        ) + user.rewards;
        
        // Apply boost
        uint256 boost = getBoostMultiplier(account);
        return baseReward * boost / BOOST_PRECISION;
    }
    
    /**
     * @notice Get remaining reward duration
     */
    function getRewardForDuration() external view returns (uint256) {
        return rewardRate * rewardsDuration;
    }
    
    /**
     * @notice Get user's complete info
     */
    function getUserInfo(address account) external view returns (
        uint256 stakedAmount,
        uint256 pendingRewards,
        uint256 boostMultiplier,
        uint256 stakeDuration,
        uint256 totalClaimed
    ) {
        UserInfo memory user = userInfo[account];
        return (
            user.amount,
            earned(account),
            getBoostMultiplier(account),
            user.stakeTime > 0 ? block.timestamp - user.stakeTime : 0,
            user.claimedRewards
        );
    }
    
    /**
     * @notice Calculate APR based on current state
     */
    function getCurrentAPR() external view returns (uint256) {
        if (totalStaked == 0) return 0;
        
        // Annual rewards / Total staked * 100
        uint256 annualRewards = rewardRate * 365 days;
        return annualRewards * 10000 / totalStaked; // Returns basis points
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                      STAKING FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Stake LP tokens
     * @param amount Amount of LP tokens to stake
     */
    function stake(uint256 amount) external updateReward(msg.sender) {
        require(amount > 0, "AMOUNT_ZERO");
        
        UserInfo storage user = userInfo[msg.sender];
        
        // If new stake or restaking after full withdrawal, reset stake time
        if (user.amount == 0) {
            user.stakeTime = block.timestamp;
        }
        
        totalStaked += amount;
        user.amount += amount;
        
        require(lpToken.transferFrom(msg.sender, address(this), amount), "TRANSFER_FAILED");
        
        emit Staked(msg.sender, amount);
    }
    
    /**
     * @notice Withdraw LP tokens
     * @param amount Amount of LP tokens to withdraw
     */
    function withdraw(uint256 amount) public updateReward(msg.sender) {
        require(amount > 0, "AMOUNT_ZERO");
        
        UserInfo storage user = userInfo[msg.sender];
        require(user.amount >= amount, "INSUFFICIENT_BALANCE");
        
        totalStaked -= amount;
        user.amount -= amount;
        
        // Reset stake time if fully withdrawn
        if (user.amount == 0) {
            user.stakeTime = 0;
        }
        
        require(lpToken.transfer(msg.sender, amount), "TRANSFER_FAILED");
        
        emit Withdrawn(msg.sender, amount);
    }
    
    /**
     * @notice Claim pending rewards
     */
    function claimReward() public updateReward(msg.sender) {
        UserInfo storage user = userInfo[msg.sender];
        uint256 reward = user.rewards;
        
        if (reward > 0) {
            user.rewards = 0;
            user.claimedRewards += reward;
            
            require(rewardToken.transfer(msg.sender, reward), "TRANSFER_FAILED");
            
            emit RewardClaimed(msg.sender, reward);
        }
    }
    
    /**
     * @notice Withdraw all and claim rewards
     */
    function exit() external {
        withdraw(userInfo[msg.sender].amount);
        claimReward();
    }
    
    /**
     * @notice Compound rewards by staking more (if LP token == reward token)
     * @dev Only works if you have additional LP tokens to add
     */
    function compound(uint256 additionalLP) external updateReward(msg.sender) {
        // Claim current rewards
        UserInfo storage user = userInfo[msg.sender];
        uint256 reward = user.rewards;
        
        if (reward > 0) {
            user.rewards = 0;
            user.claimedRewards += reward;
            require(rewardToken.transfer(msg.sender, reward), "TRANSFER_FAILED");
            emit RewardClaimed(msg.sender, reward);
        }
        
        // Stake additional LP if provided
        if (additionalLP > 0) {
            totalStaked += additionalLP;
            user.amount += additionalLP;
            require(lpToken.transferFrom(msg.sender, address(this), additionalLP), "TRANSFER_FAILED");
            emit Staked(msg.sender, additionalLP);
        }
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                      ADMIN FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Add rewards to the pool
     * @param reward Amount of DTGC to add as rewards
     */
    function notifyRewardAmount(uint256 reward) external onlyOwner updateReward(address(0)) {
        require(reward > 0, "REWARD_ZERO");
        
        // Transfer rewards from treasury/sender
        require(rewardToken.transferFrom(msg.sender, address(this), reward), "TRANSFER_FAILED");
        
        if (block.timestamp >= periodFinish) {
            rewardRate = reward / rewardsDuration;
        } else {
            uint256 remaining = periodFinish - block.timestamp;
            uint256 leftover = remaining * rewardRate;
            rewardRate = (reward + leftover) / rewardsDuration;
        }
        
        // Ensure reward rate is sufficient
        uint256 balance = rewardToken.balanceOf(address(this));
        require(rewardRate <= balance / rewardsDuration, "REWARD_TOO_HIGH");
        
        lastUpdateTime = block.timestamp;
        periodFinish = block.timestamp + rewardsDuration;
        
        emit RewardAdded(reward);
    }
    
    /**
     * @notice Set rewards duration (only when no active period)
     */
    function setRewardsDuration(uint256 _rewardsDuration) external onlyOwner {
        require(
            block.timestamp > periodFinish,
            "PERIOD_NOT_FINISHED"
        );
        require(_rewardsDuration > 0, "DURATION_ZERO");
        rewardsDuration = _rewardsDuration;
        emit RewardsDurationUpdated(_rewardsDuration);
    }
    
    /**
     * @notice Update treasury address
     */
    function setTreasury(address _treasury) external onlyOwner {
        require(_treasury != address(0), "TREASURY_ZERO");
        treasury = _treasury;
        emit TreasuryUpdated(_treasury);
    }
    
    /**
     * @notice Transfer ownership
     */
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "OWNER_ZERO");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
    
    /**
     * @notice Emergency recover stuck tokens (not LP or reward tokens)
     */
    function recoverToken(address token, uint256 amount) external onlyOwner {
        require(token != address(lpToken), "CANNOT_RECOVER_LP");
        require(token != address(rewardToken) || amount <= rewardToken.balanceOf(address(this)) - totalStaked, "CANNOT_RECOVER_REWARDS");
        IPRC20(token).transfer(owner, amount);
    }
}
