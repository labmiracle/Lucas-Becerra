const { NumPosArr } = require("../1-4.js");

describe("NumPosArr", () => {
  it("retorna la sum de los valores positivos del arr", () => {
    expect(NumPosArr([1, 2, 3])).toBe(6);
    expect(NumPosArr([-1, -2, -3])).toBe(0);
    expect(NumPosArr([1, '2', 3])).toBe(6);
    expect(NumPosArr(['1', '2', '3'])).toBe(6);
  });

  it("ignora los valores negat o cadenas del arr", () => {
    expect(NumPosArr([1, -2, 'abc', '5', -6])).toBe(6);
  });
});