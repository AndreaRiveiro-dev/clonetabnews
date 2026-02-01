export default {
  testEnvironment: "node",
  transform: {},
  moduleNameMapper: {
    "^@infra/(.*)$": "<rootDir>/infra/$1",
  },
  testMatch: ["**/tests/**/*.test.js"],
};
