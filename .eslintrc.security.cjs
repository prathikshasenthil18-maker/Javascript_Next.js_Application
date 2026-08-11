module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2021, sourceType: "script" },
  env: { es2022: true, node: true },
  plugins: ["security"],
  extends: ["plugin:security/recommended-legacy"],
  ignorePatterns: ["node_modules/", ".next/", "coverage/", "reports/"],
  rules: {},
};
