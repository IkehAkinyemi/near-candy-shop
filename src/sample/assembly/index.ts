import { logging } from "near-sdk-as";
import { Candy, candyShop, suppliers } from "./model";

// This is an internal function that updates the suppliers list when there's a new supplier.
function updateSuppliers(supplier: string): void {
  suppliers.push(supplier);
}

// This updates the shop with the current supply of candy.
export function updateCandyShop(
  name: string,
  supply: i64,
  uniqueID: i64,
  supplier: string
): string {
  const candy = new Candy(name, supply, uniqueID, supplier);

  // if (candyShop.length === 0) {
  //   return "The shop is down/empty";
  // }

  candyShop.push(candy);
  updateSuppliers(supplier);

  return "✅ Updated the shop with " + name + " candy, supplier by " + supplier;
}

// Logs to the console, the current status of the shop and its suppliers.
export function candyShopStatus(): void {
  logging.log( "The current commodities within the shop as listed below");

  for (let x = 0; x <= candyShop.length; x++) {
    logging.log(candyShop[x].name);
  }

  logging.log("The current suppliers for the shop as listed below:");
  for (let x = 0; x < suppliers.length; x++ ) {
    logging.log(suppliers[x]);
  }
}
