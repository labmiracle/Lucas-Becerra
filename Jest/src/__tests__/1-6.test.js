const { EncMaxUnosConsec } = require("../1-6.js");

describe("test func mat", () => {
  test("si hay valores dist  1 y 0", () => {
    expect(EncMaxUnosConsec([0, 1, 3])).toBe(-1);
  });
  test("si hay strings de  '1' y '0'", () => {
    expect(EncMaxUnosConsec(["1", "0", 1])).toBe(1);
  });

  test("caso que calc la cadena de 1s más larga", () => {
    expect(EncMaxUnosConsec([1, "1", "1", 0, 1, 1, 1, 1, "0", 0, 1])).toBe(4);
  });
});