module.exports = {
  root: true,
  env: {
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
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/array-bracket-spacing": "error",
    "vue/arrow-spacing": "error",
    "vue/block-spacing": "error",
    "vue/brace-style": "error",
    "vue/camelcase": "error",
    "vue/comma-dangle": ["error", "always-multiline"],
    "vue/component-name-in-template-casing": "error",
    "vue/dot-location": ["error", "property"],
    "vue/eqeqeq": "error",
    "vue/key-spacing": "error",
    "vue/keyword-spacing": "error",
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-empty-pattern": "error",
    "vue/object-curly-spacing": ["error", "always"],
    "vue/padding-line-between-blocks": "error",
    "vue/space-infix-ops": "error",
    "vue/space-unary-ops": "error",
    "vue/v-on-function-call": "error",
    "vue/v-slot-style": [
      "error",
      {
        atComponent: "v-slot",
        default: "v-slot",
        named: "longform",
      },
    ],
    "vue/valid-v-slot": "error",
  },
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
