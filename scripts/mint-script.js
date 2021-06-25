const hre = require("hardhat");
require('dotenv').config();


async function main() {
    const NFT = await hre.ethers.getContractFactory("RocketNFT");
    const URI = "https://assets4.lottiefiles.com/packages/lf20_0ot2smbt.json"

    const WALLET_ADDRESS = process.env.ADDRESS
    const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS_MOONBASE

    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
    
    console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});