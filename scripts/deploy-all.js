// Full Deployment Script for DTGC Ecosystem
// Run: npx hardhat run scripts/deploy-all.js --network pulsechain

const hre = require("hardhat");

const DTGC_ADDRESS = "0xD0676B28a457371D58d47E5247b439114e40Eb0F";
const URMOM_ADDRESS = "0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0";
const LP_TOKEN_ADDRESS = "0x0000000000000000000000000000000000000000"; // Update after creating LP

async function main() {
  console.log("\n╔═══════════════════════════════════════════════════════════╗");
  console.log("║           🔥 DTGC FULL DEPLOYMENT 🔥                      ║");
  console.log("╚═══════════════════════════════════════════════════════════╝\n");

  const [deployer] = await hre.ethers.getSigners();
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  
  console.log("📍 Network:", hre.network.name);
  console.log("👤 Deployer:", deployer.address);
  console.log("💰 Balance:", hre.ethers.formatEther(balance), "PLS\n");

  const deployed = {};

  // Deploy DAO Treasury
  console.log("📦 [1/3] Deploying DAO Treasury...");
  const DAOTreasury = await hre.ethers.getContractFactory("DTGCDAOTreasury");
  const treasury = await DAOTreasury.deploy();
  await treasury.waitForDeployment();
  deployed.treasury = await treasury.getAddress();
  console.log("   ✅ DAO Treasury:", deployed.treasury);
  
  // Deploy DTGC Staking
  console.log("\n📦 [2/3] Deploying DTGC Staking...");
  const DTGCStaking = await hre.ethers.getContractFactory("DTGCStaking");
  const staking = await DTGCStaking.deploy(DTGC_ADDRESS, deployed.treasury, deployed.treasury);
  await staking.waitForDeployment();
  deployed.staking = await staking.getAddress();
  console.log("   ✅ DTGC Staking:", deployed.staking);
  
  // Deploy LP Staking (if LP token set)
  if (LP_TOKEN_ADDRESS !== "0x0000000000000000000000000000000000000000") {
    console.log("\n📦 [3/3] Deploying LP Staking...");
    const LPStaking = await hre.ethers.getContractFactory("DTGCLPStaking");
    const lpStaking = await LPStaking.deploy(LP_TOKEN_ADDRESS, DTGC_ADDRESS, deployed.treasury);
    await lpStaking.waitForDeployment();
    deployed.lpStaking = await lpStaking.getAddress();
    console.log("   ✅ LP Staking:", deployed.lpStaking);
  } else {
    console.log("\n⏭️  [3/3] Skipping LP Staking (LP token not set)");
    deployed.lpStaking = "NOT_DEPLOYED";
  }
  
  // Configure Treasury
  console.log("\n⚙️  Configuring contracts...");
  await treasury.approveStakingContract(deployed.staking);
  console.log("   ✅ DTGC Staking approved");
  
  if (deployed.lpStaking !== "NOT_DEPLOYED") {
    await treasury.approveStakingContract(deployed.lpStaking);
    console.log("   ✅ LP Staking approved");
  }
  
  // Summary
  console.log("\n═══════════════════════════════════════════════════════════");
  console.log("                   DEPLOYMENT COMPLETE 🎉");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`DTGC Token:      ${DTGC_ADDRESS}`);
  console.log(`DAO Treasury:    ${deployed.treasury}`);
  console.log(`DTGC Staking:    ${deployed.staking}`);
  if (deployed.lpStaking !== "NOT_DEPLOYED") {
    console.log(`LP Staking:      ${deployed.lpStaking}`);
  }
  
  console.log("\n📋 NEXT STEPS:");
  console.log(`1. Fund Treasury: treasury.fundTreasury(200_000_000 * 1e18)`);
  console.log(`2. Fund Staking: treasury.fundStakingContract("${deployed.staking}", 50_000_000 * 1e18)`);
  console.log(`3. Update frontend/src/config/constants.js with addresses`);
  
  return deployed;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
