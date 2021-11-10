import { logging, Context, u128, PersistentVector } from "near-sdk-as";
import { Candy, candyShop, suppliers, candyIds,} from "./model";
import { supplyID, TxFee } from "../../utils";

// This updates the shop with the current supply of candy.
export function updateCandyShop(
  name: string,
  supply: u32,
): string {
  const txDeposit = Context.attachedDeposit;
  verifyShopTxFee(txDeposit);

  const id = generateuniqueID() as supplyID;
  const candy = new Candy(name, supply, Context.sender, id);

  candyShop.set(id , candy);
  updateSuppliers(Context.sender);
  candyIds.push(id);

  return "✅ Updated the shop with " + name + " candy, supplier by " + Context.sender;
}

// Logs to the console, the current status of the shop and its suppliers.
export function getcandyItem(uniqueId: supplyID): Candy {
  assert(candyShop.contains(uniqueId), "This candy item doesn't exist in the CandyShop");
  const candy = candyShop.get(uniqueId) as Candy;
  logging.log("This is the candy content of the candy ID - " + uniqueId);
  return candy;
}

export function getCandyShop(): PersistentVector<Candy>  {
  const shopContent = new PersistentVector<Candy>("sc");
  for (let x = 0; x < candyIds.length; x++) {
    const item = candyShop.get(candyIds[x]) as Candy;
    shopContent.push(item)
  }

  return shopContent;
}

export function deleteCandyItem(uniqueId: supplyID): string {
  assert(candyShop.contains(uniqueId), "This candy item doesn't exist in the CandyShop");
  candyShop.delete(uniqueId);

  return "The Candy item with " + uniqueId + " has been deleted from the CandyShop";
}


// This is an internal function that updates the suppliers list when there's a new supplier.
function updateSuppliers(supplier: string): void {
  for (let x = 0; x < suppliers.length; x++) {
    if (suppliers[x] != supplier) {
      suppliers.push(supplier);
    }
  }
}

function generateuniqueID(): supplyID {
  const id = "CS-" + Context.blockTimestamp.toString();
  return id;
}

function verifyShopTxFee(deposit: u128): void {
  assert(deposit >= TxFee, "You need to have at least 0.52 NEAR tokens to continue");
}