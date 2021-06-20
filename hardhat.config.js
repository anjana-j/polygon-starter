require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const gasPrice    = 30000000000; // 25 GWEI
const gasLimit    = 9500000;  

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