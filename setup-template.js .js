// setup-template.js
const fs = require('fs');
const path = require('path');

// Define your template structure
const templateStructure = {
  'contracts': {
    'MyContract.sol': '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract MyContract {\n  uint256 public data;\n\n  function setData(uint256 _data) public {\n    data = _data;\n  }\n\n  function getData() public view returns (uint256) {\n    return data;\n  }\n}\n'
  },
  'truffle-config.js': 'module.exports = {\n  networks: {\n    development: {\n      host: "127.0.0.1",\n      port: 7545, // Ganache default port\n      network_id: "*",\n    },\n  },\n};\n',
  'index.js': 'const Web3 = require(\'web3\');\nconst ContractInteract = require(\'./contract-interact\');\n\nconst ganacheProvider = \'http://127.0.0.1:7545\'; // Ganache default endpoint\nconst contractAbi = YOUR_CONTRACT_ABI;\n\nconst web3 = new Web3(new Web3.providers.HttpProvider(ganacheProvider));\n\n// Read contract address from JSON file\nconst contractInfoPath = \'./contract-info.json\';\nconst contractInfo = JSON.parse(fs.readFileSync(contractInfoPath));\n\nconst contract = new ContractInteract(web3, contractInfo.address, contractAbi);\n\nasync function run() {\n  const contractData = await contract.getContractData();\n  console.log(\'Contract Data:\', contractData);\n}\n\nrun();\n',
  'contract-interact.js': 'const fs = require(\'fs\');\nconst path = require(\'path\');\nconst Web3 = require(\'web3\');\nconst TruffleContract = require(\'@truffle/contract\');\n\n// ... (Your ContractInteract implementation)\n\nmodule.exports = ContractInteract;\n',
  '.npmignore': 'node_modules\nbuild\n',
  'package.json': '{\n  "name": "web3-app",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "postinstall": "node setup-template.js"\n  },\n  "dependencies": {\n    "web3": "^1.5.3",\n    "@truffle/contract": "^4.0.31",\n    "truffle": "^5.5.4",\n    "ganache-cli": "^7.1.0"\n  },\n  "devDependencies": {},\n  "engines": {\n    "node": ">=10.0.0"\n  }\n}\n',
  '.gitignore': 'node_modules\nbuild\n',
  '.gitattributes': '* text=auto\n'
};

// Create the template structure
function createTemplateStructure(basePath, structure) {
  Object.entries(structure).forEach(([key, value]) => {
    const fullPath = path.join(basePath, key);
    if (typeof value === 'string') {
      fs.writeFileSync(fullPath, value);
    } else {
      fs.mkdirSync(fullPath);
      createTemplateStructure(fullPath, value);
    }
  });
}

// Get the current working directory
const currentDir = process.cwd();

// Create the template structure in the current directory
createTemplateStructure(currentDir, templateStructure);

console.log('Template structure created successfully!');
