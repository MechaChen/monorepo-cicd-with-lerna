/**
 * Calculator functions
 */
const { validateNumber } = require("@monorepo/utils");

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 * @throws {Error} If either a or b is not a valid number
 */
function add(a, b) {
  if (!validateNumber(a) || !validateNumber(b)) {
    throw new Error("Invalid number: both arguments must be valid numbers");
  }
  return a + b;
}

module.exports = {
  add,
};
