// add the game address here and update the contract name if necessary
const gameAddr = "0x68B1D87F95878fE05B998F19b66F4baba5De1aed";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx = await game.giveMeAllowance(100045);
    const tx2 = await game.mint(100000);

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx2.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
