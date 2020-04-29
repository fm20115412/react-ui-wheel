const base = require('./jest.config')
module.exports = Object.assign({}, base, {
    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
    collectDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    reporters: ["default", "jest-junit"],
});