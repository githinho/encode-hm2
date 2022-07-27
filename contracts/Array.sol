// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract Array {
    uint256[] private array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    function removeItem(uint16 index) external {
        require(index < array.length, "Index out of bounds");
        array[index] = array[array.length - 1];
        array.pop();
    }

    function removeItemKeepOrder(uint16 index) external {
        require(index < array.length, "Index out of bounds");
        for (uint16 i = index; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array.pop();
    }

    function getArray() public view returns (uint256[] memory) {
        return array;
    }
}
