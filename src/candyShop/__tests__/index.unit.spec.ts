import { VMContext } from "near-mock-vm";
import { u128 } from "near-sdk-core";
import { TxFee } from "../../utils";
import { deleteCandyItem, getcandyItem, updateCandyShop } from "../assembly";
import { candyIds, suppliers } from "../assembly/model";

const shopOwner = "ikeh_akinyemi.testnet";

describe("Checks for creating account", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(shopOwner);
  });

  it("updates the candyShop with a Candy", () => {
    const name = "MilkyWay";
    const response = updateCandyShop(name, 200);

    expect(response).toBe("✅ Updated the shop with " + name + " candy, supplier by " + shopOwner);
    
    expect(candyIds.length).toBeGreaterThan(0, "A new candy exists in the candyShop with the uniqueId: " + candyIds[0]);

  });

  it("Smart contract panics when transaction fee is not attached", () => {
    VMContext.setAttached_deposit(u128.Zero);
    function updateCandyShopWithZeroDeposit(): void {
      updateCandyShop("MilkyWay", 200);
    }

    expect(updateCandyShopWithZeroDeposit).toThrow(
      "Attached deposit is expected to be equal to: " + TxFee.toString() + " Yocto"
    );
  });
});

describe("Grab an item from the candyShop", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(shopOwner);

    const name = "MilkyWay";
    updateCandyShop(name, 200);
  });

  it("Returns an existing candy from the candyShop", () => {
    const candy = getcandyItem(candyIds[0]);

    expect(candy.uniqueId).toStrictEqual(candyIds[0], "The uniqueId on the returned candy is equal to the id: " + candyIds[0])
  });

  it("Smart contract panics when there's no candy with such ID", () => {
    function getUnknownItem(): void {
      getcandyItem("CS-0000001");
    }
    expect(getUnknownItem).toThrow("This candy item doesn't exist in the CandyShop")
  })
});

describe("Delete a supplied candy from the candyShop", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(shopOwner);

    const name = "MilkyWay";
    updateCandyShop(name, 200);
  });

  it("Deletes an item from the candyShop, and returns a response", () => {
    const response = deleteCandyItem(candyIds[0]);
    expect(response).toBe("The Candy item with " + candyIds[0] + " has been deleted from the CandyShop")
  })

  it("Smart contract panics when there's no candy with such ID", () => {
    function daleteUnknownItem(): void {
      deleteCandyItem("CS-0000001");
    }
    expect(daleteUnknownItem).toThrow("This candy item doesn't exist in the CandyShop")
  })
});