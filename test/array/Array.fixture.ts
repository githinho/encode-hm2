import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Array } from "../../src/types/Array";
import type { Array__factory } from "../../src/types/factories/Array__factory";

export async function deployArrayFixture(): Promise<{ array: Array }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const arrayFactory: Array__factory = <Array__factory>await ethers.getContractFactory("Array");
  const array: Array = <Array>await arrayFactory.connect(admin).deploy();
  await array.deployed();

  return { array };
}
