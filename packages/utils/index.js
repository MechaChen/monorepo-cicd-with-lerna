/**
 * Utility functions
 */

/**
 * Validates if a value is a valid number
 * @param {*} value - The value to validate
 * @returns {boolean} True if the value is a valid number, false otherwise
 */
function validateNumber(value) {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
}

module.exports = {
  validateNumber,
};
