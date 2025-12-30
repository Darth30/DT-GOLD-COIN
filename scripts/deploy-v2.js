// Deploy V2 Staking Contracts + DAO Voting
// Run: npx hardhat run scripts/deploy-v2.js --network pulsechain

const hre = require("hardhat");

// Token Addresses (PulseChain)
const DTGC_ADDRESS = "0xD0676B28a457371D58d47E5247b439114e40Eb0F";
const URMOM_ADDRESS = "0xe43b3cEE3554e120213b8B69Caf690B6C04A7ec0";
const LP_TOKEN_ADDRESS = "0x1891bD6A959B32977c438f3022678a8659364A72"; // DTGC/URMOM LP

// Recipients
const DEV_WALLET = "0xd41219b525fc2570921a7ad1fd806c47cf26aed1";
const DAO_TREASURY = "0x22289ce7d7B962e804E9C8C6C57D2eD4Ffe0AbFC"; // Already deployed

async function main() {
  console.log("\n╔═══════════════════════════════════════════════════════════╗");
  console.log("║           🔥 DTGC V2 DEPLOYMENT 🔥                        ║");
  console.log("╠═══════════════════════════════════════════════════════════╣");
  console.log("║  DTGC Staking: Bronze 2.5% | Silver 6% | Gold 9%         ║");
  console.log("║  LP Staking:   Diamond 12% (DTGC/URMOM LP)               ║");
  console.log("║  Entry/Exit:   1% Dev + 4% DAO                           ║");
  console.log("║  EES Penalty:  2% Dev + 18% DAO Voting                   ║");
  console.log("╚═══════════════════════════════════════════════════════════╝\n");

  const [deployer] = await hre.ethers.getSigners();
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  
  console.log("📍 Network:", hre.network.name);
  console.log("👤 Deployer:", deployer.address);
  console.log("💰 Balance:", hre.ethers.formatEther(balance), "PLS");
  console.log("💵 Dev Wallet:", DEV_WALLET);
  console.log("🏛️  DAO Treasury:", DAO_TREASURY);
  console.log("");

  const deployed = {};

  // ═══════════════════════════════════════════════════════════════
  // Step 1: Deploy DAO Voting Pool (receives 18% EES fees)
  // ═══════════════════════════════════════════════════════════════
  
  console.log("📦 [1/4] Deploying DAO Voting Contract...");
  
  // Deploy with placeholder staking addresses (will update after)
  const DTGCDAOVoting = await hre.ethers.getContractFactory("DTGCDAOVoting");
  const daoVoting = await DTGCDAOVoting.deploy(
    DTGC_ADDRESS,
    DAO_TREASURY,
    DAO_TREASURY,  // Placeholder - will update
    DAO_TREASURY   // Placeholder - will update
  );
  await daoVoting.waitForDeployment();
  deployed.daoVoting = await daoVoting.getAddress();
  console.log("   ✅ DAO Voting:", deployed.daoVoting);
  
  // ═══════════════════════════════════════════════════════════════
  // Step 2: Deploy DTGC Staking V2
  // ═══════════════════════════════════════════════════════════════
  
  console.log("\n📦 [2/4] Deploying DTGC Staking V2...");
  console.log("   Tiers: Bronze 2.5% | Silver 6% | Gold 9%");
  
  const DTGCStakingV2 = await hre.ethers.getContractFactory("DTGCStakingV2");
  const stakingV2 = await DTGCStakingV2.deploy(
    DTGC_ADDRESS,
    DEV_WALLET,
    DAO_TREASURY,
    deployed.daoVoting  // EES fees go here
  );
  await stakingV2.waitForDeployment();
  deployed.stakingV2 = await stakingV2.getAddress();
  console.log("   ✅ DTGC Staking V2:", deployed.stakingV2);
  
  // ═══════════════════════════════════════════════════════════════
  // Step 3: Deploy LP Staking V2 (Diamond Tier)
  // ═══════════════════════════════════════════════════════════════
  
  console.log("\n📦 [3/4] Deploying LP Staking V2 (Diamond 12%)...");
  
  const DTGCLPStakingV2 = await hre.ethers.getContractFactory("DTGCLPStakingV2");
  const lpStakingV2 = await DTGCLPStakingV2.deploy(
    LP_TOKEN_ADDRESS,
    DTGC_ADDRESS,
    DTGC_ADDRESS,      // For voting eligibility check
    DEV_WALLET,
    DAO_TREASURY,
    deployed.daoVoting  // EES fees go here
  );
  await lpStakingV2.waitForDeployment();
  deployed.lpStakingV2 = await lpStakingV2.getAddress();
  console.log("   ✅ LP Staking V2:", deployed.lpStakingV2);
  
  // ═══════════════════════════════════════════════════════════════
  // Step 4: Configure DAO Voting with staking addresses
  // ═══════════════════════════════════════════════════════════════
  
  console.log("\n⚙️  [4/4] Configuring DAO Voting...");
  
  const votingContract = await hre.ethers.getContractAt("DTGCDAOVoting", deployed.daoVoting);
  await votingContract.setStakingContracts(deployed.stakingV2, deployed.lpStakingV2);
  console.log("   ✅ Staking contracts linked to DAO Voting");
  
  // ═══════════════════════════════════════════════════════════════
  // Summary
  // ═══════════════════════════════════════════════════════════════
  
  console.log("\n═══════════════════════════════════════════════════════════");
  console.log("                   DEPLOYMENT COMPLETE 🎉");
  console.log("═══════════════════════════════════════════════════════════");
  console.log("");
  console.log("📋 TOKEN ADDRESSES:");
  console.log("─────────────────────────────────────────────────────────");
  console.log(`DTGC Token:        ${DTGC_ADDRESS}`);
  console.log(`URMOM Token:       ${URMOM_ADDRESS}`);
  console.log(`DTGC/URMOM LP:     ${LP_TOKEN_ADDRESS}`);
  console.log("");
  console.log("📋 CONTRACT ADDRESSES:");
  console.log("─────────────────────────────────────────────────────────");
  console.log(`Dev Wallet:        ${DEV_WALLET}`);
  console.log(`DAO Treasury:      ${DAO_TREASURY}`);
  console.log(`DAO Voting:        ${deployed.daoVoting}`);
  console.log(`DTGC Staking V2:   ${deployed.stakingV2}`);
  console.log(`LP Staking V2:     ${deployed.lpStakingV2}`);
  console.log("");
  
  console.log("📋 STAKING TIERS:");
  console.log("─────────────────────────────────────────────────────────");
  console.log("🥉 Bronze:  14 days | 2.5% APR  | 0.5% bonus | DTGC");
  console.log("🥈 Silver:  30 days | 6% APR   | 1.5% bonus | DTGC");
  console.log("🥇 Gold:    90 days | 9% APR   | 4% bonus   | DTGC");
  console.log("💎 Diamond: 90 days | 12% APR  | 5% bonus   | LP");
  console.log("");
  
  console.log("📋 FEE STRUCTURE:");
  console.log("─────────────────────────────────────────────────────────");
  console.log("Entry/Exit: 5% (1% dev + 4% DAO/stakers)");
  console.log("EES:        20% (2% dev + 18% DAO voting pool)");
  console.log("");
  
  console.log("📋 DAO VOTING OPTIONS (for EES funds):");
  console.log("─────────────────────────────────────────────────────────");
  console.log("A. Buy and Burn DTGC");
  console.log("B. Auto Liquidity Injection");
  console.log("C. Add to Treasury");
  console.log("D. All of the Above");
  console.log("");
  console.log("Eligible Voters: Verified Stakers OR 1M+ DTGC Holders");
  console.log("");
  
  console.log("📋 NEXT STEPS:");
  console.log("─────────────────────────────────────────────────────────");
  console.log("1. Fund DTGC Staking V2 with reward tokens");
  console.log("2. Fund LP Staking V2 with reward tokens");
  console.log("3. Update frontend with new contract addresses");
  console.log("4. Verify contracts on PulseScan");
  console.log("");
  
  console.log("📋 VERIFY COMMANDS:");
  console.log("─────────────────────────────────────────────────────────");
  console.log(`npx hardhat verify --network pulsechain ${deployed.daoVoting} "${DTGC_ADDRESS}" "${DAO_TREASURY}" "${DAO_TREASURY}" "${DAO_TREASURY}"`);
  console.log(`npx hardhat verify --network pulsechain ${deployed.stakingV2} "${DTGC_ADDRESS}" "${DEV_WALLET}" "${DAO_TREASURY}" "${deployed.daoVoting}"`);
  console.log(`npx hardhat verify --network pulsechain ${deployed.lpStakingV2} "${LP_TOKEN_ADDRESS}" "${DTGC_ADDRESS}" "${DTGC_ADDRESS}" "${DEV_WALLET}" "${DAO_TREASURY}" "${deployed.daoVoting}"`);
  
  return deployed;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
