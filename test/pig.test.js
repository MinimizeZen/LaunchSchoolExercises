const pig = require("./pig.js");
const wolf = require("./wolf.js");
describe("PigTests", () => {
  test("TestOinked", () => {
    let littlepig = new pig();
    littlepig.oink();
    expect(littlepig.oinked).toBe(true);
  });
});
describe("WolfTests", () => {
  test("TestSprintHunger", () => {
    let bigBadWolf = new wolf();
    bigBadWolf.sprint();
    expect(bigBadWolf.hungry).toBe(true);
  });
});
