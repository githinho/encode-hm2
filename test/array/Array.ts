import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import {
  shouldRemoveIndexes,
  shouldRemoveItem,
  shouldRemoveItemAndKeepOrder,
  shouldThrowExceptionForIndexOutOfBounds,
} from "./Array.behavior";
import { deployArrayFixture } from "./Array.fixture";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("Array", function () {
    beforeEach(async function () {
      const { array } = await this.loadFixture(deployArrayFixture);
      this.array = array;
    });

    shouldRemoveIndexes();
    shouldRemoveItem();
    shouldRemoveItemAndKeepOrder();
    shouldThrowExceptionForIndexOutOfBounds();
  });
});
