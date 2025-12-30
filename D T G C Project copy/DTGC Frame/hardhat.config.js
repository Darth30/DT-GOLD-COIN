// Hardhat Configuration for PulseChain Deployment
// dump.tires - DTGC Staking Platform

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";
const PULSECHAIN_RPC = process.env.PULSECHAIN_RPC || "https://rpc.pulsechain.com";
const PULSECHAIN_TESTNET_RPC = process.env.PULSECHAIN_TESTNET_RPC || "https://rpc.v4.testnet.pulsechain.com";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      viaIR: true,
    }
  },
  
  networks: {
    // PulseChain Mainnet
    pulsechain: {
      url: PULSECHAIN_RPC,
      chainId: 369,
      accounts: [PRIVATE_KEY],
      gasPrice: "auto",
    },
    
    // PulseChain Testnet (v4)
    pulsechainTestnet: {
      url: PULSECHAIN_TESTNET_RPC,
      chainId: 943,
      accounts: [PRIVATE_KEY],
      gasPrice: "auto",
    },
    
    // Local development
    hardhat: {
      chainId: 31337,
      forking: {
        url: PULSECHAIN_RPC,
        enabled: process.env.FORK_ENABLED === "true",
      }
    },
  },
  
  etherscan: {
    apiKey: {
      pulsechain: "0", // PulseScan doesn't require API key but needs placeholder
    },
    customChains: [
      {
        network: "pulsechain",
        chainId: 369,
        urls: {
          apiURL: "https://api.scan.pulsechain.com/api",
          browserURL: "https://scan.pulsechain.com"
        }
      }
    ]
  },
  
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  
  mocha: {
    timeout: 40000
  }
};
