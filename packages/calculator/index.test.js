const { add } = require("./index");

describe("Calculator Package", () => {
  test("should add two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 5)).toBe(15);
  });

  test("should throw error when input is invalid using utils validateNumber", () => {
    expect(() => add(null, 5)).toThrow(
      "Invalid number: both arguments must be valid numbers"
    );
    expect(() => add(2, "abc")).toThrow(
      "Invalid number: both arguments must be valid numbers"
    );
    expect(() => add(undefined, 3)).toThrow(
      "Invalid number: both arguments must be valid numbers"
    );
  });
});
