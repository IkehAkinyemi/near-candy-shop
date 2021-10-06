import { updateCandyShop } from "../assembly";

const shopName = "Graate";

describe("Contract", () => {
  it("Updates the shop with the current supply of candy.", () => {
    expect(updateCandyShop("Milkyway", 234, 91302, shopName)).toStrictEqual(
      "✅ Updated the shop with Milkyway candy, supplier by " + shopName
    );
  });
});
