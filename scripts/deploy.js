// Deployment Script for DTGC Staking Ecosystem
// dump.tires on PulseChain

const hre = require("hardhat");

// Token Addresses (PulseChain Mainnet)
const DTGC_ADDRESS = "0xD0676B28a457371D58d47E5247b439114e40Eb0F";
const URMOM_ADDRESS = "0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0";

async function main() {
  console.log("═══════════════════════════════════════════════════════════");
  console.log("          DUMP.TIRES - DTGC Staking Deployment");
  console.log("═══════════════════════════════════════════════════════════\n");

  const [deployer] = await hre.ethers.getSigners();
  
  console.log("Deployer:", deployer.address);
  console.log("Balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "PLS\n");

  // ═══════════════════════════════════════════════════════════
  // Step 1: Deploy DAO Treasury
  // ═══════════════════════════════════════════════════════════
  
  console.log("📦 Deploying DAO Treasury...");
  
  const DAOTreasury = await hre.ethers.getContractFactory("DTGCDAOTreasury");
  const treasury = await DAOTreasury.deploy();
  await treasury.waitForDeployment();
  
  const treasuryAddress = await treasury.getAddress();
  console.log("✅ DAO Treasury deployed to:", treasuryAddress);
  
  // ═══════════════════════════════════════════════════════════
  // Step 2: Deploy Staking Contract
  // ═══════════════════════════════════════════════════════════
  
  console.log("\n📦 Deploying Staking Contract...");
  
  const DTGCStaking = await hre.ethers.getContractFactory("DTGCStaking");
  const staking = await DTGCStaking.deploy(
    DTGC_ADDRESS,           // DTGC Token
    treasuryAddress,        // Fee recipient (DAO Treasury)
    treasuryAddress         // Reward pool (initially same as treasury)
  );
  await staking.waitForDeployment();
  
  const stakingAddress = await staking.getAddress();
  console.log("✅ Staking Contract deployed to:", stakingAddress);
  
  // ═══════════════════════════════════════════════════════════
  // Step 3: Configure Treasury
  // ═══════════════════════════════════════════════════════════
  
  console.log("\n⚙️ Configuring Treasury...");
  
  // Approve staking contract
  const approveTx = await treasury.approveStakingContract(stakingAddress);
  await approveTx.wait();
  console.log("✅ Staking contract approved in treasury");
  
  // ═══════════════════════════════════════════════════════════
  // Deployment Summary
  // ═══════════════════════════════════════════════════════════
  
  console.log("\n═══════════════════════════════════════════════════════════");
  console.log("                  DEPLOYMENT SUMMARY");
  console.log("═══════════════════════════════════════════════════════════\n");
  
  console.log("Network:          PulseChain (Chain ID: 369)");
  console.log("DTGC Token:       ", DTGC_ADDRESS);
  console.log("URMOM Token:      ", URMOM_ADDRESS);
  console.log("DAO Treasury:     ", treasuryAddress);
  console.log("Staking Contract: ", stakingAddress);
  
  console.log("\n═══════════════════════════════════════════════════════════");
  console.log("                   NEXT STEPS");
  console.log("═══════════════════════════════════════════════════════════\n");
  
  console.log("1. Fund Treasury with 200M DTGC from dev wallet:");
  console.log(`   - Approve: dtgc.approve("${treasuryAddress}", 200_000_000 * 1e18)`);
  console.log(`   - Fund:    treasury.fundTreasury(200_000_000 * 1e18)`);
  
  console.log("\n2. Fund Staking Contract with initial rewards:");
  console.log(`   - treasury.fundStakingContract("${stakingAddress}", 50_000_000 * 1e18)`);
  
  console.log("\n3. Update frontend config:");
  console.log(`   - STAKING: '${stakingAddress}'`);
  console.log(`   - DAO_TREASURY: '${treasuryAddress}'`);
  
  console.log("\n4. Verify contracts on PulseScan:");
  console.log(`   npx hardhat verify --network pulsechain ${treasuryAddress}`);
  console.log(`   npx hardhat verify --network pulsechain ${stakingAddress} "${DTGC_ADDRESS}" "${treasuryAddress}" "${treasuryAddress}"`);
  
  console.log("\n═══════════════════════════════════════════════════════════");
  console.log("                  DEPLOYMENT COMPLETE 🎉");
  console.log("═══════════════════════════════════════════════════════════\n");
  
  // Return addresses for testing/scripting
  return {
    dtgc: DTGC_ADDRESS,
    urmom: URMOM_ADDRESS,
    treasury: treasuryAddress,
    staking: stakingAddress,
  };
}

// Execute deployment
main()
  .then((addresses) => {
    console.log("Contract addresses:", JSON.stringify(addresses, null, 2));
    process.exit(0);
  })
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
