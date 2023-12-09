// index.js
const { Web3 } = require("web3");
const fs = require("fs");

// Load contract ABI from build/contracts/MyContract.json
const contractAbiPath = "./build/contracts/MyContract.json";
const contractAbi = JSON.parse(fs.readFileSync(contractAbiPath)).abi;

const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
const web3 = new Web3(provider);

// Read contract address from JSON file
const contractInfoPath = "./migrations/contract-info.json";
const contractInfo = JSON.parse(fs.readFileSync(contractInfoPath)).address;

const contract = new web3.eth.Contract(contractAbi, contractInfo);

async function run() {
  const contractData = await contract.methods.getData().call();
  console.log("Contract Data:", contractData);
}

run();
