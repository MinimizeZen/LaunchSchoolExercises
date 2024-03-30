const Cat = require("./cat.js");
describe("Cat Tests", () => {
  let kitty;

  beforeEach(() => {
    kitty = new Cat("Kitty");
  });

  test("is cat", () => {
    expect(kitty.name).toBe("Kitty");
  });

  test("name", () => {
    expect("Kitty").toEqual(kitty.name);
  });

  test("miaow", () => {
    expect(kitty.miaow()).toMatch(/ is miaowing\./);
    expect(kitty.miaow()).toContain(" is miaowing.");
  });

  test("raises error", () => {
    expect(new Cat()).toThrow();
  });
});
