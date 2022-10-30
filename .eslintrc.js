module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "standard",
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:vuejs-accessibility/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "script",
  },
  plugins: ["prettier", "vuejs-accessibility"],
  overrides: [
    {
      files: ["**/test/**/*.spec.{j,t}s?(x)"],
      parserOptions: {
        parser: "@babel/eslint-parser",
        sourceType: "module",
      },
      env: {
        jest: true,
      },
    },
  ],
}
