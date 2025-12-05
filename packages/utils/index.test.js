const { validateNumber } = require("./index");

describe("Utils Package", () => {
  test("should return true for valid numbers", () => {
    expect(validateNumber(5)).toBe(true);
    expect(validateNumber(-10)).toBe(true);
    expect(validateNumber(0)).toBe(true);
    expect(validateNumber(3.14)).toBe(true);
  });

  test("should return false for invalid inputs", () => {
    expect(validateNumber(null)).toBe(false);
    expect(validateNumber(undefined)).toBe(false);
    expect(validateNumber("123")).toBe(false);
    expect(validateNumber(NaN)).toBe(false);
    expect(validateNumber(Infinity)).toBe(false);
  });
});
