/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts", "node"],
  modulePaths: ["<rootDir"],
  testRegex: "\\.test\\.ts$",
  transform: {
    // "^.+\\.(t|j)s$": "ts-jest",
    "^.+\\.(t)s$": "ts-jest",
  },
  moduleNameMapper: {
    "src/(.*).ts$": "<rootDir>/src/$1.ts",
    "test/(.*).ts$": "<rootDir>/test/$1.ts",
  },
  // setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
  // setupFilesAfterEnv: ["./test/jest.setup.ts"],
  globalSetup: "./test/global.setup.ts",
  globalTeardown: "./test/global.teardown.ts",
};
