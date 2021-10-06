import { PersistentVector } from "near-sdk-core";

@nearBindgen
export class Candy {
  constructor(
    public name: string,
    public supply: i64,
    public uniqueID: i64,
    public supplier: string
  ) {}
}

export const candyShop = new PersistentVector<Candy>("shop");
export const suppliers = new PersistentVector<string>("suppliers");
