require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY_MOONBASE = process.env.PRIVATE_KEY_MOONBASE;
const gasPrice    = 25000000000;
const gasLimit    = 10000000;  

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      blockGasLimit: gasLimit,
      gasPrice: gasPrice
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
      gasPrice: gasPrice
    },
    moonbase: {
      url: "https://rpc.testnet.moonbeam.network",
      chainId: 1287,
      accounts: [PRIVATE_KEY_MOONBASE]
    }
  },
  solidity: {
    compilers: [{
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  contractSizer: {
    runOnCompile: true,
  },
  paths: {
    sources  : "./contracts",
    tests    : "./test",
    cache    : "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}