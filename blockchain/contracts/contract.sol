// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ExtrimianChallenge {

    string public message = "";

    function getMessage() external view returns (string memory) {
        return message;
    }

    function updateGreeting(string memory newMessage) external {
        message = newMessage;
    }
}