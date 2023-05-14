require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { GOERLI_RPC_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    goerli: { url: GOERLI_RPC_URL, accounts: [PRIVATE_KEY], chainId: 5 },
    localhost: {
      url: "HTTP://127.0.0.1:7545",
      chainId: 1337,
    },
  },
};
