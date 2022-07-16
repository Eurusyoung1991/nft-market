require("@nomiclabs/hardhat-waffle");
// const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1997,
        },
        epsaceTestnet: {
            url: 'https://evmtestnet.confluxrpc.com',
            timeout: 20 * 60 * 1000,
            accounts: ['d824ef1fd968decd95706be2f632602ca9af71428bda9861a3abeb0ad923fb73']
        },
    },
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};