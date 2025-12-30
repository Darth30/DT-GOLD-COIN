// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    ╔═══════════════════════════════════════════════════════════════╗
    ║              DTGC DAO VOTING - dump.tires                     ║
    ║                                                               ║
    ║  Vote on EES (Emergency End Stake) fund allocation:          ║
    ║  A. Buy and Burn DTGC                                        ║
    ║  B. Auto Liquidity Injection                                 ║
    ║  C. Add to Treasury                                          ║
    ║  D. All of the Above                                         ║
    ║                                                               ║
    ║  Eligible: Verified Stakers OR 1M+ DTGC Holders              ║
    ╚═══════════════════════════════════════════════════════════════╝
*/

interface IPRC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
}

interface IStaking {
    function isVerifiedStaker(address user) external view returns (bool);
}

interface IPulseXRouter {
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);
    
    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountA, uint256 amountB, uint256 liquidity);
}

contract DTGCDAOVoting {
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTANTS
    // ═══════════════════════════════════════════════════════════════
    
    uint256 public constant MIN_TOKENS_FOR_VOTING = 1_000_000 * 1e18;
    uint256 public constant VOTING_PERIOD = 7 days;
    uint256 public constant MIN_QUORUM = 3;  // Minimum voters for valid proposal
    
    // Allocation options
    enum AllocationOption {
        BUY_AND_BURN,       // A - Buy DTGC and burn
        LIQUIDITY,          // B - Add to DTGC/URMOM liquidity
        TREASURY,           // C - Send to DAO Treasury
        ALL_OF_ABOVE        // D - Split equally between A, B, C
    }
    
    address public constant BURN_ADDRESS = 0x0000000000000000000000000000000000000369;
    
    // ═══════════════════════════════════════════════════════════════
    //                         STATE
    // ═══════════════════════════════════════════════════════════════
    
    IPRC20 public immutable dtgcToken;
    IStaking public stakingContract;
    IStaking public lpStakingContract;
    
    address public owner;
    address public daoTreasury;
    address public pulsexRouter;
    address public urmomToken;
    
    struct Proposal {
        uint256 id;
        uint256 amount;           // DTGC amount to allocate
        uint256 startTime;
        uint256 endTime;
        uint256 votesA;           // Buy and Burn
        uint256 votesB;           // Liquidity
        uint256 votesC;           // Treasury
        uint256 votesD;           // All of Above
        uint256 totalVoters;
        bool executed;
        AllocationOption winner;
    }
    
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    mapping(uint256 => mapping(address => AllocationOption)) public userVote;
    
    uint256 public totalBurned;
    uint256 public totalToLiquidity;
    uint256 public totalToTreasury;
    
    // ═══════════════════════════════════════════════════════════════
    //                         EVENTS
    // ═══════════════════════════════════════════════════════════════
    
    event ProposalCreated(uint256 indexed id, uint256 amount, uint256 endTime);
    event Voted(uint256 indexed proposalId, address indexed voter, AllocationOption option);
    event ProposalExecuted(uint256 indexed id, AllocationOption winner, uint256 amount);
    event BuyAndBurn(uint256 amount);
    event LiquidityAdded(uint256 dtgcAmount, uint256 urmomAmount);
    event TreasuryFunded(uint256 amount);
    
    // ═══════════════════════════════════════════════════════════════
    //                         CONSTRUCTOR
    // ═══════════════════════════════════════════════════════════════
    
    constructor(
        address _dtgcToken,
        address _daoTreasury,
        address _stakingContract,
        address _lpStakingContract
    ) {
        dtgcToken = IPRC20(_dtgcToken);
        daoTreasury = _daoTreasury;
        stakingContract = IStaking(_stakingContract);
        lpStakingContract = IStaking(_lpStakingContract);
        owner = msg.sender;
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    function canVote(address user) public view returns (bool) {
        // Check if verified staker in either contract
        bool isStaker = false;
        try stakingContract.isVerifiedStaker(user) returns (bool result) {
            isStaker = result;
        } catch {}
        
        if (!isStaker) {
            try lpStakingContract.isVerifiedStaker(user) returns (bool result) {
                isStaker = result;
            } catch {}
        }
        
        // Or holds 1M+ DTGC
        bool holdsEnough = dtgcToken.balanceOf(user) >= MIN_TOKENS_FOR_VOTING;
        
        return isStaker || holdsEnough;
    }
    
    function getProposal(uint256 id) external view returns (
        uint256 amount,
        uint256 endTime,
        uint256[4] memory votes,
        uint256 totalVoters,
        bool executed,
        AllocationOption winner
    ) {
        Proposal memory p = proposals[id];
        return (
            p.amount,
            p.endTime,
            [p.votesA, p.votesB, p.votesC, p.votesD],
            p.totalVoters,
            p.executed,
            p.winner
        );
    }
    
    function getActiveProposal() external view returns (uint256) {
        for (uint256 i = proposalCount; i > 0; i--) {
            if (!proposals[i].executed && block.timestamp <= proposals[i].endTime) {
                return i;
            }
        }
        return 0;
    }
    
    function getVotingStats() external view returns (
        uint256 _totalBurned,
        uint256 _totalLiquidity,
        uint256 _totalTreasury,
        uint256 _proposalCount
    ) {
        return (totalBurned, totalToLiquidity, totalToTreasury, proposalCount);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         VOTING FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    
    /**
     * @notice Create a new proposal to allocate EES funds
     * @param amount Amount of DTGC to allocate
     */
    function createProposal(uint256 amount) external onlyOwner {
        require(amount > 0, "ZERO_AMOUNT");
        require(dtgcToken.balanceOf(address(this)) >= amount, "INSUFFICIENT_BALANCE");
        
        proposalCount++;
        
        proposals[proposalCount] = Proposal({
            id: proposalCount,
            amount: amount,
            startTime: block.timestamp,
            endTime: block.timestamp + VOTING_PERIOD,
            votesA: 0,
            votesB: 0,
            votesC: 0,
            votesD: 0,
            totalVoters: 0,
            executed: false,
            winner: AllocationOption.TREASURY  // Default
        });
        
        emit ProposalCreated(proposalCount, amount, block.timestamp + VOTING_PERIOD);
    }
    
    /**
     * @notice Vote on an active proposal
     * @param proposalId ID of the proposal
     * @param option Vote choice (0=BuyBurn, 1=Liquidity, 2=Treasury, 3=All)
     */
    function vote(uint256 proposalId, AllocationOption option) external {
        require(canVote(msg.sender), "NOT_ELIGIBLE");
        require(proposalId > 0 && proposalId <= proposalCount, "INVALID_PROPOSAL");
        
        Proposal storage p = proposals[proposalId];
        require(block.timestamp <= p.endTime, "VOTING_ENDED");
        require(!p.executed, "ALREADY_EXECUTED");
        require(!hasVoted[proposalId][msg.sender], "ALREADY_VOTED");
        
        hasVoted[proposalId][msg.sender] = true;
        userVote[proposalId][msg.sender] = option;
        p.totalVoters++;
        
        if (option == AllocationOption.BUY_AND_BURN) p.votesA++;
        else if (option == AllocationOption.LIQUIDITY) p.votesB++;
        else if (option == AllocationOption.TREASURY) p.votesC++;
        else p.votesD++;
        
        emit Voted(proposalId, msg.sender, option);
    }
    
    /**
     * @notice Execute a completed proposal
     * @param proposalId ID of the proposal
     */
    function executeProposal(uint256 proposalId) external {
        Proposal storage p = proposals[proposalId];
        require(block.timestamp > p.endTime, "VOTING_NOT_ENDED");
        require(!p.executed, "ALREADY_EXECUTED");
        require(p.totalVoters >= MIN_QUORUM, "QUORUM_NOT_MET");
        
        p.executed = true;
        
        // Determine winner
        uint256 maxVotes = p.votesA;
        p.winner = AllocationOption.BUY_AND_BURN;
        
        if (p.votesB > maxVotes) { maxVotes = p.votesB; p.winner = AllocationOption.LIQUIDITY; }
        if (p.votesC > maxVotes) { maxVotes = p.votesC; p.winner = AllocationOption.TREASURY; }
        if (p.votesD > maxVotes) { p.winner = AllocationOption.ALL_OF_ABOVE; }
        
        // Execute based on winner
        _executeAllocation(p.amount, p.winner);
        
        emit ProposalExecuted(proposalId, p.winner, p.amount);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         INTERNAL
    // ═══════════════════════════════════════════════════════════════
    
    function _executeAllocation(uint256 amount, AllocationOption option) internal {
        if (option == AllocationOption.BUY_AND_BURN) {
            _buyAndBurn(amount);
        } else if (option == AllocationOption.LIQUIDITY) {
            _addLiquidity(amount);
        } else if (option == AllocationOption.TREASURY) {
            _sendToTreasury(amount);
        } else {
            // All of above - split 3 ways
            uint256 third = amount / 3;
            _buyAndBurn(third);
            _addLiquidity(third);
            _sendToTreasury(amount - (third * 2));
        }
    }
    
    function _buyAndBurn(uint256 amount) internal {
        // Send to burn address
        dtgcToken.transfer(BURN_ADDRESS, amount);
        totalBurned += amount;
        emit BuyAndBurn(amount);
    }
    
    function _addLiquidity(uint256 amount) internal {
        // For now, send to treasury to manually add liquidity
        // In production, integrate with PulseX router
        dtgcToken.transfer(daoTreasury, amount);
        totalToLiquidity += amount;
        emit LiquidityAdded(amount, 0);
    }
    
    function _sendToTreasury(uint256 amount) internal {
        dtgcToken.transfer(daoTreasury, amount);
        totalToTreasury += amount;
        emit TreasuryFunded(amount);
    }
    
    // ═══════════════════════════════════════════════════════════════
    //                         ADMIN
    // ═══════════════════════════════════════════════════════════════
    
    modifier onlyOwner() { require(msg.sender == owner, "NOT_OWNER"); _; }
    
    function setStakingContracts(address _staking, address _lpStaking) external onlyOwner {
        stakingContract = IStaking(_staking);
        lpStakingContract = IStaking(_lpStaking);
    }
    
    function setDaoTreasury(address _treasury) external onlyOwner {
        daoTreasury = _treasury;
    }
    
    function setPulsexRouter(address _router, address _urmom) external onlyOwner {
        pulsexRouter = _router;
        urmomToken = _urmom;
    }
    
    function transferOwnership(address _new) external onlyOwner {
        owner = _new;
    }
    
    function recoverToken(address token, uint256 amount) external onlyOwner {
        IPRC20(token).transfer(owner, amount);
    }
}
