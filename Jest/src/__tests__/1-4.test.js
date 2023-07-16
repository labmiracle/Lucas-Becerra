const { sumArrPos } = require("../1-4.js");

describe("test para sumar positivos en arr", () => {
  test("no ingresa nada", () => {
    expect(sumArrPos([])).toBe(0);
  });

  test("no es arr", () => {
    expect(sumArrPos("hola")).toBe("Ingresar array");
  });

  test("arr caracteres especiales", () => {
    expect(sumArrPos(["@"])).toBe(0);
  });

  test("arr de cadena de num", () => {
    expect(sumArrPos(["1", "2", "3"])).toBe(6);
  });
  
  test("arr de num en string", () => {
    expect(sumArrPos(["uno","dos","tres"])).toBe(0);
  });

  test("num negativos", () => {
    expect(sumArrPos([-1, -3])).toBe(0);
  });

});