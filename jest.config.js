module.exports = {
  roots: ["<rootDir>/src"],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
