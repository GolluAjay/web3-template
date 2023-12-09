// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public data;

    constructor(string memory _data) {
        data = _data;
    }

    function getData() public view returns (string memory) {
        return data;
    }
}