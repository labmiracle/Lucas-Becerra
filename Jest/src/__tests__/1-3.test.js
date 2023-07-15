const {baseCanonica} = require ("../1-3.js");

describe("baseCanonica", () => {
  it("Saca las no canonicas", () => {
    expect(baseCanonica("CTAGGGTA")).toBe("CTAGGGTA");
    expect(baseCanonica("ACGTacgt")).toBe("ACGT");
    expect(baseCanonica("CTAGGGTAXY")).toBe("CTAGGGTA");
    expect(baseCanonica("")).toBe("");
  });
});