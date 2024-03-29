const { fizzBuzz } = require("../1-1.js");

describe("test func fizzBuzz", () => {
  test("si el num es divisible por 3", () => {
    expect(fizzBuzz(21)).toBe("Fizz");
  });
  test("si el num es divisible por 5", () => {
    expect(fizzBuzz(35)).toBe("Buzz");
  });
  test("si el num es divisible por 5 y 3", () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
  test("cualquier otro valor", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
  test("si es cero", () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz");
  });

  test("si no es un número", () => {
    expect(fizzBuzz("hola")).toBe("Debe ingresar un número");
  });
});