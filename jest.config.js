module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  collectCoverageFrom: [
    "packages/**/*.js",
    "!packages/**/*.test.js",
    "!packages/**/node_modules/**",
  ],
  coverageDirectory: "coverage",
  verbose: true,
};
