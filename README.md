# web3-template

**Version:** 1.2.0  
**Author:** GolluAjay  
**License:** ISC

## Description
Basic web3 app to interact with smart contracts locally.

## Installation
Run the following command to use the template:

```bash
npx web3-template app
```
## How to Use the Template

### Start a local blockchain network:
```bash
npm run ganache
```
**(Note : By default, Ganache runs on port 8545.)**

### Compile Solidity code using Truffle:
```bash
npm run compile
```
### Deploy smart contract to the blockchain network:
```bash
npm run migrate
```
**(Note: This only works if Ganache starts.)**

### Start the web3 application:
```bash
npm run start
```

## Dependencies

* **Commander** (^11.1.0)

* **Cross-Spawn** (^7.0.3)

* **fs-extra** (^11.2.0)

Node Version Requirement

Ensure that you have Node.js version 20.0.0 or higher installed.

## Contributing

Feel free to contribute to the development of this template. If you encounter any issues or have suggestions, [please create an issue]('https://github.com/GolluAjay/web3-template/issues').

Bugs and Issues
If you encounter any bugs or issues, please [report them here](https://github.com/GolluAjay/web3-template/issues).