const Web3 = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');
const { projectId } = require('./../../secrets.json');

async function main() {
    // Set up web3 object, connected to the local development network
    // const web3 = new Web3(new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${projectId}`)); // rinkeby network conenction
    const web3 = new Web3('http://localhost:8545'); // ganache address here
    const loader = setupLoader({ provider: web3 }).web3;

    // Retrieve accounts from the local node
    const accounts = await web3.eth.getAccounts();
    // console.log(accounts);

    const address = '0x8c3921dc6258baf86fe4ae4a0bc2180609976cb3'; // change this address after contract deployment
    const box = loader.fromArtifact('Box', address);

    // Send a transaction to store() a new value in the Box
    await box.methods.store(20)
        .send({ from: accounts[0], gas: 50000, gasPrice: 1e6 });

    // Call the retrieve() function of the deployed Box contract
    const value = await box.methods.retrieve().call();
    console.log("Box value is", value);
}

main();
