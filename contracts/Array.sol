// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract Array {
    uint256[] private array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    function removeIndexes(uint256[] calldata indexes) external {
        uint256[] memory newArray = new uint256[](array.length - indexes.length);
        uint256 arrayCounter = 0;
        for (uint256 i = 0; i < array.length; i++) {
            bool add = true;
            for (uint256 j = 0; j < indexes.length; j++) {
                if (i == indexes[j]) {
                    add = false;
                    break;
                }
            }
            if (add) {
                newArray[arrayCounter] = array[i];
                arrayCounter++;
            }
        }
        array = newArray;
    }

    function removeItem(uint256 index) external {
        require(index < array.length, "Index out of bounds");
        array[index] = array[array.length - 1];
        array.pop();
    }

    function removeItemKeepOrder(uint256 index) external {
        require(index < array.length, "Index out of bounds");
        for (uint256 i = index; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array.pop();
    }

    function getArray() public view returns (uint256[] memory) {
        return array;
    }
}
