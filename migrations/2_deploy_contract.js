// migrations/2_deploy_contract.js
const MyContract = artifacts.require("MyContract");
const fs = require('fs');
const path = require('path');

module.exports = async function(deployer) {
  await deployer.deploy(MyContract,123)
    .then(async (instance) => {
      console.log('MyContract deployed at:', instance.address);

      // Write contract address to JSON file
      const contractInfo = {
        address: instance.address,
      };
      
      const filePath = path.join(__dirname, 'contract-info.json');
      fs.writeFileSync(filePath, JSON.stringify(contractInfo, null, 2));

      console.log('Contract address saved to:', filePath);
    });
};
