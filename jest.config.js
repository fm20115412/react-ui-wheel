module.exports = {
    verbose: true,
    clearMocks: false,
    collectCoverage: false,
    reporters: ["default"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    testMatch: ["<rootDir>/**/__test__/**/*.unit.(js|jsx|ts|tsx)"],
    transform: {
        "^.+unit\\.(js|jsx)$": "babel-jest",
        "^.+\\.(ts|tsx)$": "ts-jest"
    }
}