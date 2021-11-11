import { Context, PersistentMap, PersistentVector } from "near-sdk-core";
import { AccountId, supplyID } from "../../utils";

@nearBindgen
export class Candy {
  uniqueId: supplyID;
  name: string;
  supply: u64;
  supplier: AccountId;

  constructor(
    name: string,
    supply: u64,
    supplier: string,
    uniqueId: supplyID
  ) {
    this.name = name;
    this.uniqueId = uniqueId;
    this.supply = supply;
    this.supplier = supplier
  }
}

export const candyShop = new PersistentMap<supplyID, Candy>("s");
export const suppliers = new PersistentVector<AccountId>("su");
export const candyIds = new PersistentVector<string>("gids");

