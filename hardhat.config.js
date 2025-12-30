require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      viaIR: true,
    }
  },
  networks: {
    pulsechain: {
      url: "https://rpc.pulsechain.com",
      chainId: 369,
      accounts: [PRIVATE_KEY],
    },
    hardhat: { chainId: 31337 },
  },
  etherscan: {
    apiKey: {
      pulsechain: "0",
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
};
