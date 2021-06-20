require('dotenv').config();
const { expect } = require("chai");

const ADDRESS = process.env.ADDRESS;

describe("NFT", function() {
  it("Deploy contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("RocketNFT");
    const nft = await NFT.deploy();

    const URI = "//assets4.lottiefiles.com/packages/lf20_ocrcnofw.json";
    await nft.deployed();
    await nft.mint(ADDRESS, URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});


