// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint256 public data;

    constructor(uint256 _data) {
        require(_data > 0, "Data must be greater than 0");
        data = _data;
    }

    function getData() public view returns (uint256) {
        return data;
    }
}
