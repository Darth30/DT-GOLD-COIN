// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║                 DTGC DAO TREASURY - dump.tires                ║
    ║                                                               ║
    ║  Manages the 200M DTGC allocation for:                        ║
    ║  - Staking reward distributions                               ║
    ║  - Community incentives                                       ║
    ║  - LP pair bootstrapping (URMOM/DTGC)                        ║
    ║  - Governance proposals                                       ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

interface IPRC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
}

contract DTGCDAOTreasury {
    
    // ═══════════════════════════════════════════════════════════════
    //                           TOKENS
    // ═══════════════════════════════════════════════════════════════
    
    IPRC20 public immutable dtgcToken;
    IPRC20 public immutable urmomToken;
    
    // PulseChain addresses
    address public constant DTGC = 0xD0676B28a457371D58d47E5247b439114e40Eb0F;
    address public constant URMOM = 0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0;
    address public constant PULSE_BURN = 0x0000000000000000000000000000000000000369;
    
    // ═══════════════════════════════════════════════════════════════
    //                         GOVERNANCE
    // ═══════════════════════════════════════════════════════════════
    
    address public guardian;           // Initial admin (dev wallet)
    address public pendingGuardian;
    
    // Multisig threshold for large operations
    address[] public councilMembers;
    uint256 public councilThreshold;   // Required approvals
    
    // ═══════════════════════════════════════════════════════════════
    //                      ALLOCATION BUCKETS
    // ═══════════════════════════════════════════════════════════════
    
    uint256 public constant TOTAL_ALLOCATION = 200_000_000 * 1e18; // 200M DTGC
    
    // Budget allocations (adjustable by governance)
    uint256 public stakingBudget;      // For staking contract rewards
    uint256 public lpBudget;           // For URMOM/DTGC LP bootstrapping
    uint256 public communityBudget;    // For airdrops, contests, etc.
    uint256 public operationsBudget;   // For dev costs, marketing
    
    // Spending limits (per tx and per period)
    uint256 public dailyLimit = 1_000_000 * 1e18;  // 1M DTGC daily max
    uint256 public lastDayReset;
    uint256 public spentToday;
    
    // ═══════════════════════════════════════════════════════════════
    //                      APPROVED CONTRACTS
    // ═══════════════════════════════════════════════════════════════
    
    mapping(address => bool) public approvedStakingContracts;
    mapping(address => bool) public approvedLPContracts;
    
    // ═══════════════════════════════════════════════════════════════
    //                         PROPOSALS
    // ═══════════════════════════════════════════════════════════════
    
    struct Proposal {
        uint256 id;
        address proposer;
        string description;
        address targetContract;
        uint256 amount;
        ProposalType pType;
        uint256 approvals;
        uint256 createdAt;
        uint256 executedAt;
        bool executed;
        bool cancelled;
    }
    
    enum ProposalType {
        FUND_STAKING,
        FUND_LP,
        COMMUNITY_AIRDROP,
        ADD_COUNCIL_MEMBER,
        REMOVE_COUNCIL_MEMBER,
        UPDATE_LIMITS,
        EMERGENCY_ACTION
    }
    
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public proposalApprovals;
    
    // ═══════════════════════════════════════════════════════════════
    //                          EVENTS
    // ═══════════════════════════════════════════════════════════════
    
    event TreasuryFunded(address indexed funder, uint256 amount);
    event StakingFunded(address indexed stakingContract, uint256 amount);
    event LPFunded(address indexed lpContract, uint256 amount);
    event CommunityDistribution(address[] recipients, uint256 totalAmount);
    
    event ProposalCreated(uint256 indexed id, address indexed proposer, ProposalType pType, uint256 amount);
    event ProposalApproved(uint256 indexed id, address indexed approver);
    event ProposalExecuted(uint256 indexed id, address indexed executor);
    event ProposalCancelled(uint256 indexed id);
    
    event CouncilMemberAdded(address indexed member);
    event CouncilMemberRemoved(address indexed member);
    event GuardianTransferred(address indexed oldGuardian, address indexed newGuardian);
    event DailyLimitUpdated(uint256 newLimit);
    
    // ═══════════════════════════════════════════════════════════════
    //                         MODIFIERS
    // ═══════════════════════════════════════════════════════════════
    
    modifier onlyGuardian() {
        require(msg.sender == guardian, "NOT_GUARDIAN");
        _;
    }
    
    modifier onlyCouncilOrGuardian() {
        require(msg.sender == guardian || _isCouncilMember(msg.sender), "NOT_AUTHORIZED");
        _;
    }
    
    modifier withinDailyLimit(uint256 amount) {
        _resetDailyLimitIfNeeded();
        require(spentToday + amount <= dailyLimit, "DAILY_LIMIT_EXCEEDED");
        spentToday += amount;
        _;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                        CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════
    
    constructor() {
        dtgcToken = IPRC20(DTGC);
        urmomToken = IPRC20(URMOM);
        guardian = msg.sender;
        lastDayReset = block.timestamp;
        
        // Initial budget split (adjustable later)
        stakingBudget = 100_000_000 * 1e18;   // 100M for staking rewards
        lpBudget = 50_000_000 * 1e18;         // 50M for LP incentives
        communityBudget = 30_000_000 * 1e18;  // 30M for community
        operationsBudget = 20_000_000 * 1e18; // 20M for operations
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                    FUNDING FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Fund the treasury with DTGC (from dev wallet 200M allocation)
     */
    function fundTreasury(uint256 amount) external {
        require(amount > 0, "ZERO_AMOUNT");
        require(dtgcToken.transferFrom(msg.sender, address(this), amount), "TRANSFER_FAILED");
        emit TreasuryFunded(msg.sender, amount);
    }
    
    /**
     * @notice Fund an approved staking contract
     */
    function fundStakingContract(
        address stakingContract,
        uint256 amount
    ) external onlyCouncilOrGuardian withinDailyLimit(amount) {
        require(approvedStakingContracts[stakingContract], "NOT_APPROVED_STAKING");
        require(amount <= stakingBudget, "EXCEEDS_STAKING_BUDGET");
        
        stakingBudget -= amount;
        require(dtgcToken.transfer(stakingContract, amount), "TRANSFER_FAILED");
        
        emit StakingFunded(stakingContract, amount);
    }
    
    /**
     * @notice Fund LP bootstrapping
     */
    function fundLPContract(
        address lpContract,
        uint256 amount
    ) external onlyCouncilOrGuardian withinDailyLimit(amount) {
        require(approvedLPContracts[lpContract], "NOT_APPROVED_LP");
        require(amount <= lpBudget, "EXCEEDS_LP_BUDGET");
        
        lpBudget -= amount;
        require(dtgcToken.transfer(lpContract, amount), "TRANSFER_FAILED");
        
        emit LPFunded(lpContract, amount);
    }
    
    /**
     * @notice Distribute to community (airdrops, rewards, etc.)
     */
    function communityDistribute(
        address[] calldata recipients,
        uint256[] calldata amounts
    ) external onlyCouncilOrGuardian {
        require(recipients.length == amounts.length, "LENGTH_MISMATCH");
        
        uint256 total;
        for (uint256 i = 0; i < amounts.length; i++) {
            total += amounts[i];
        }
        
        require(total <= communityBudget, "EXCEEDS_COMMUNITY_BUDGET");
        _resetDailyLimitIfNeeded();
        require(spentToday + total <= dailyLimit, "DAILY_LIMIT_EXCEEDED");
        
        communityBudget -= total;
        spentToday += total;
        
        for (uint256 i = 0; i < recipients.length; i++) {
            if (amounts[i] > 0 && recipients[i] != address(0)) {
                require(dtgcToken.transfer(recipients[i], amounts[i]), "TRANSFER_FAILED");
            }
        }
        
        emit CommunityDistribution(recipients, total);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                    PROPOSAL SYSTEM
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Create a new proposal
     */
    function createProposal(
        string calldata description,
        address targetContract,
        uint256 amount,
        ProposalType pType
    ) external onlyCouncilOrGuardian returns (uint256) {
        proposalCount++;
        
        proposals[proposalCount] = Proposal({
            id: proposalCount,
            proposer: msg.sender,
            description: description,
            targetContract: targetContract,
            amount: amount,
            pType: pType,
            approvals: 0,
            createdAt: block.timestamp,
            executedAt: 0,
            executed: false,
            cancelled: false
        });
        
        emit ProposalCreated(proposalCount, msg.sender, pType, amount);
        return proposalCount;
    }
    
    /**
     * @notice Approve a proposal (council members)
     */
    function approveProposal(uint256 proposalId) external onlyCouncilOrGuardian {
        Proposal storage prop = proposals[proposalId];
        require(!prop.executed && !prop.cancelled, "INVALID_STATE");
        require(!proposalApprovals[proposalId][msg.sender], "ALREADY_APPROVED");
        
        proposalApprovals[proposalId][msg.sender] = true;
        prop.approvals++;
        
        emit ProposalApproved(proposalId, msg.sender);
    }
    
    /**
     * @notice Execute an approved proposal
     */
    function executeProposal(uint256 proposalId) external onlyCouncilOrGuardian {
        Proposal storage prop = proposals[proposalId];
        require(!prop.executed && !prop.cancelled, "INVALID_STATE");
        require(prop.approvals >= councilThreshold || councilThreshold == 0, "INSUFFICIENT_APPROVALS");
        
        prop.executed = true;
        prop.executedAt = block.timestamp;
        
        // Execute based on type
        if (prop.pType == ProposalType.FUND_STAKING) {
            _executeFundStaking(prop.targetContract, prop.amount);
        } else if (prop.pType == ProposalType.FUND_LP) {
            _executeFundLP(prop.targetContract, prop.amount);
        } else if (prop.pType == ProposalType.ADD_COUNCIL_MEMBER) {
            _addCouncilMember(prop.targetContract);
        } else if (prop.pType == ProposalType.REMOVE_COUNCIL_MEMBER) {
            _removeCouncilMember(prop.targetContract);
        }
        
        emit ProposalExecuted(proposalId, msg.sender);
    }
    
    /**
     * @notice Cancel a proposal
     */
    function cancelProposal(uint256 proposalId) external {
        Proposal storage prop = proposals[proposalId];
        require(msg.sender == prop.proposer || msg.sender == guardian, "NOT_AUTHORIZED");
        require(!prop.executed, "ALREADY_EXECUTED");
        
        prop.cancelled = true;
        emit ProposalCancelled(proposalId);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                    ADMIN FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function approveStakingContract(address stakingContract) external onlyGuardian {
        approvedStakingContracts[stakingContract] = true;
    }
    
    function revokeStakingContract(address stakingContract) external onlyGuardian {
        approvedStakingContracts[stakingContract] = false;
    }
    
    function approveLPContract(address lpContract) external onlyGuardian {
        approvedLPContracts[lpContract] = true;
    }
    
    function revokeLPContract(address lpContract) external onlyGuardian {
        approvedLPContracts[lpContract] = false;
    }
    
    function setDailyLimit(uint256 newLimit) external onlyGuardian {
        dailyLimit = newLimit;
        emit DailyLimitUpdated(newLimit);
    }
    
    function setCouncilThreshold(uint256 threshold) external onlyGuardian {
        require(threshold <= councilMembers.length, "THRESHOLD_TOO_HIGH");
        councilThreshold = threshold;
    }
    
    function transferGuardianship(address newGuardian) external onlyGuardian {
        require(newGuardian != address(0), "ZERO_ADDRESS");
        pendingGuardian = newGuardian;
    }
    
    function acceptGuardianship() external {
        require(msg.sender == pendingGuardian, "NOT_PENDING_GUARDIAN");
        emit GuardianTransferred(guardian, pendingGuardian);
        guardian = pendingGuardian;
        pendingGuardian = address(0);
    }
    
    /**
     * @notice Reallocate budgets between categories
     */
    function reallocateBudgets(
        uint256 newStaking,
        uint256 newLP,
        uint256 newCommunity,
        uint256 newOperations
    ) external onlyGuardian {
        uint256 total = newStaking + newLP + newCommunity + newOperations;
        uint256 currentTotal = stakingBudget + lpBudget + communityBudget + operationsBudget;
        require(total == currentTotal, "TOTAL_MISMATCH");
        
        stakingBudget = newStaking;
        lpBudget = newLP;
        communityBudget = newCommunity;
        operationsBudget = newOperations;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                    INTERNAL FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function _resetDailyLimitIfNeeded() internal {
        if (block.timestamp >= lastDayReset + 1 days) {
            spentToday = 0;
            lastDayReset = block.timestamp;
        }
    }
    
    function _isCouncilMember(address account) internal view returns (bool) {
        for (uint256 i = 0; i < councilMembers.length; i++) {
            if (councilMembers[i] == account) return true;
        }
        return false;
    }
    
    function _addCouncilMember(address member) internal {
        require(!_isCouncilMember(member), "ALREADY_MEMBER");
        councilMembers.push(member);
        emit CouncilMemberAdded(member);
    }
    
    function _removeCouncilMember(address member) internal {
        for (uint256 i = 0; i < councilMembers.length; i++) {
            if (councilMembers[i] == member) {
                councilMembers[i] = councilMembers[councilMembers.length - 1];
                councilMembers.pop();
                emit CouncilMemberRemoved(member);
                return;
            }
        }
    }
    
    function _executeFundStaking(address target, uint256 amount) internal {
        require(approvedStakingContracts[target], "NOT_APPROVED");
        stakingBudget -= amount;
        require(dtgcToken.transfer(target, amount), "TRANSFER_FAILED");
        emit StakingFunded(target, amount);
    }
    
    function _executeFundLP(address target, uint256 amount) internal {
        require(approvedLPContracts[target], "NOT_APPROVED");
        lpBudget -= amount;
        require(dtgcToken.transfer(target, amount), "TRANSFER_FAILED");
        emit LPFunded(target, amount);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                      VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function getTreasuryBalance() external view returns (uint256 dtgc, uint256 urmom) {
        return (dtgcToken.balanceOf(address(this)), urmomToken.balanceOf(address(this)));
    }
    
    function getBudgets() external view returns (
        uint256 staking,
        uint256 lp,
        uint256 community,
        uint256 operations
    ) {
        return (stakingBudget, lpBudget, communityBudget, operationsBudget);
    }
    
    function getDailySpendingStatus() external view returns (
        uint256 spent,
        uint256 limit,
        uint256 remaining,
        uint256 resetsIn
    ) {
        uint256 resetTime = lastDayReset + 1 days;
        return (
            spentToday,
            dailyLimit,
            dailyLimit > spentToday ? dailyLimit - spentToday : 0,
            resetTime > block.timestamp ? resetTime - block.timestamp : 0
        );
    }
    
    function getCouncilMembers() external view returns (address[] memory) {
        return councilMembers;
    }
    
    function getProposal(uint256 proposalId) external view returns (Proposal memory) {
        return proposals[proposalId];
    }
}
