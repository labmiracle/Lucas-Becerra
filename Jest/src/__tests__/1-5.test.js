const { EncPrimCaractRept } = require ("../1-5.js");

test("Encontrar caract repetidos", () => {
    expect(EncPrimCaractRept("abbcde")).toBe(10);
    expect(EncPrimCaractRept("AABcDe")).toBe(9);
    expect(EncPrimCaractRept("xyzXYZ")).toBe(-1)
    ;
    expect(EncPrimCaractRept("abcd")).toBe(-1);
    expect(EncPrimCaractRept("")).toBe(-1);
  });