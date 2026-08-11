module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  parserOptions: { ecmaVersion: 2024, sourceType: "module" },
  env: { es2022: true, node: true, browser: true, mocha: true },
  ignorePatterns: ["node_modules/", ".next/", "coverage/", "reports/", "tool-fixtures/"],
  overrides: [
    {
      files: ["lib/**/*.js", "test/**/*.js", "scripts/**/*.js", "next.config.js"],
      parserOptions: { sourceType: "script" },
    },
  ],
};
