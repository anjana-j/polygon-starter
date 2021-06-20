const hre = require("hardhat");
require('dotenv').config();

async function main() {
    const NFT = await hre.ethers.getContractFactory("RocketNFT");
    const URI = "https://assets4.lottiefiles.com/packages/lf20_ocrcnofw.json"

    const WALLET_ADDRESS = process.env.ADDRESS
    const CONTRACT_ADDRESS = "0x25bF53e85d8FfA623403D3f5554F850934C29028"

    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
    
    console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});