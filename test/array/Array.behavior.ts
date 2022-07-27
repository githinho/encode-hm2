import { expect } from "chai";

export function shouldRemoveItemUnordered(): void {
  it("should remove item at specified index", async function () {
    await this.array.connect(this.signers.admin).removeItem(1);
    expect(await this.array.connect(this.signers.admin).getArray()).to.deep.equal([0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("should remove multiple items at specified index", async function () {
    await this.array.connect(this.signers.admin).removeItem(8);
    await this.array.connect(this.signers.admin).removeItem(2);
    await this.array.connect(this.signers.admin).removeItem(7);

    expect(await this.array.connect(this.signers.admin).getArray()).to.deep.equal([0, 1, 10, 3, 4, 5, 6, 9, 11]);
  });
}

export function shouldRemoveItemAndKeepOrder(): void {
  it("should remove item at specified index and keep the order", async function () {
    await this.array.connect(this.signers.admin).removeItemKeepOrder(1);
    expect(await this.array.connect(this.signers.admin).getArray()).to.deep.equal([0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  it("should remove items at specified index and keep the order", async function () {
    await this.array.connect(this.signers.admin).removeItemKeepOrder(8);
    await this.array.connect(this.signers.admin).removeItemKeepOrder(2);
    await this.array.connect(this.signers.admin).removeItemKeepOrder(7);

    expect(await this.array.connect(this.signers.admin).getArray()).to.deep.equal([0, 1, 3, 4, 5, 6, 7, 10, 11]);
  });
}

export function shouldThrowExceptionForIndexOutOfBounds(): void {
  it("should throw exception for index out of bounds", async function () {
    expect(this.array.connect(this.signers.admin).removeItem(111)).to.be.revertedWith("Index out of bounds");
    expect(this.array.connect(this.signers.admin).removeItemKeepOrder(111)).to.be.revertedWith("Index out of bounds");
  });
}
