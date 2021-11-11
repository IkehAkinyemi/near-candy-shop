import { logging, Context, u128, PersistentVector } from "near-sdk-as";
import { Candy, candyShop, suppliers, candyIds,} from "./model";
import { AccountId, supplyID, TxFee } from "../../utils";

/**
 * Updates the CandyShop with a Candy supply
 * @param name the name of the candy
 * @param supply the amount of this candy supplied
 * @returns string
 */
export function updateCandyShop(
  name: string,
  supply: u64,
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

/**
 * Returns the Candy with the uniqueId passed as an argument
 * @param uniqueId 
 * @returns Candy
 */
export function getcandyItem(uniqueId: supplyID): Candy {
  assert(candyShop.contains(uniqueId), "This candy item doesn't exist in the CandyShop");
  const candy = candyShop.get(uniqueId) as Candy;

  return candy;
}

/**
 * Returns the entire Candyshop content
 * @returns PersistentVector<Candy>
 */
export function getCandyShop(): Candy[]  {
  const shopContent: Candy[] = [];
  for (let x = 0; x < candyIds.length; x++) {
    const item = candyShop.get(candyIds[x]) as Candy;
    shopContent.push(item)
  }

  return shopContent;
}

/**
 * Deletes a candy from the CandyShop
 * @param uniqueId 
 * @returns 
 */
export function deleteCandyItem(uniqueId: supplyID): string {
  assert(candyShop.contains(uniqueId), "This candy item doesn't exist in the CandyShop");
  candyShop.delete(uniqueId);

  return "The Candy item with " + uniqueId + " has been deleted from the CandyShop";
}

/**
 * This is an internal function that updates the 
 * suppliers list when there's a new supplier.
 * @param supplier 
 */
function updateSuppliers(supplier: AccountId): void {
  for (let x = 0; x < suppliers.length; x++) {
    if (suppliers[x] != supplier) {
      suppliers.push(supplier);
    }
  }
}

/**
 * generates a random ID 
 * @returns supplyID
 */
function generateuniqueID(): supplyID {
  const id = "CS-" + Context.blockTimestamp.toString();
  return id;
}

/**
 * A helper function to verify the NEAR provided is greater or equal to 0.52 NEAR
 * @param deposit 
 */
function verifyShopTxFee(deposit: u128): void {
  assert(deposit >= TxFee, "You need to have at least 0.52 NEAR tokens to continue");
}