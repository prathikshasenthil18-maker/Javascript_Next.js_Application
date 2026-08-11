module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2022, sourceType: "script" },
  env: { es2022: true, node: true },
  plugins: ["sonarjs"],
  extends: ["plugin:sonarjs/recommended-legacy"],
  ignorePatterns: ["node_modules/", ".next/", "coverage/", "reports/"],
  rules: { "sonarjs/cognitive-complexity": ["error", 5] },
};
