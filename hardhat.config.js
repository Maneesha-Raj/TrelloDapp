

require("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"infura",
  networks: {
    localhost: {
      url:"http://127.0.0.1:8545/"
    },
    infura: {
      url: "https://sepolia.infura.io/v3/655f40ba88f0457f83dc332bdfe0830e",
      accounts: [process.env.PRIVATE_KEY]
    },
  },

  solidity: "0.8.20",
};
