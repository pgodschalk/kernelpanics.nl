module.exports = {
  extends: [
    // Gebruik de Standard config als base
    // https://github.com/stylelint/stylelint-config-standard
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    // Standaardvolgorde van CSS properties
    // https://github.com/stormwarning/stylelint-config-recess-order
    "stylelint-config-recess-order",
    // Override rules die conflicteren met Prettier
    // https://github.com/shannonmoeller/stylelint-config-prettier
    "stylelint-config-prettier",
    // Override rules voor linten van CSS modules
    // https://github.com/pascalduez/stylelint-config-css-modules
    "stylelint-config-css-modules",
  ],
  plugins: [
    // Extra rules voor SCSS
    "stylelint-scss",
  ],
  // Rule lists:
  // - https://stylelint.io/user-guide/rules/
  // - https://github.com/kristerkari/stylelint-scss#list-of-rules
  rules: {
    /**
     * Possible errors
     */

    /* Font family */
    "font-family-no-missing-generic-family-keyword": null,

    /* String */
    "string-no-newline": null,

    /**
     * Limit language features
     */
    /* Alpha-value */
    "alpha-value-notation": "number",

    /* Hue */
    "hue-degree-notation": "number",

    /**
     * Stylistic issues
     */
    /* Color */
    "color-function-notation": "legacy",
    "color-named": "never",
    "color-no-hex": true,

    /* Font weight */
    "font-weight-notation": "numeric",

    /* Function */
    "function-url-scheme-disallowed-list": ["ftp", "http"],

    /* Number */
    "number-max-precision": 8,

    /* Time */
    "time-min-milliseconds": 100,

    /* Unit */
    "unit-disallowed-list": ["cm", "in", "mm", "pc", "pt"],

    /* Shorthand property */
    "shorthand-property-no-redundant-values": true,

    /* Value */
    "value-no-vendor-prefix": true,

    /* Property */
    "property-no-vendor-prefix": true,

    /* Declaration */
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,

    /* Selector */
    "selector-max-attribute": 1,
    "selector-max-id": 1,
    "selector-max-type": [0, { ignore: ["child", "descendant", "compounded"] }],
    "selector-max-universal": 1,
    "selector-no-vendor-prefix": true,

    /* Function */
    "function-url-quotes": "always",

    /* String */
    "string-quotes": "double",

    /* Declaration block */
    "declaration-block-semicolon-newline-after": "always",

    /* Selector */
    "selector-attribute-quotes": "always",

    /* Media query list */
    "media-query-list-comma-newline-after": "never-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always",

    /* At-rule */
    "at-rule-name-space-after": "always",
    "at-rule-semicolon-space-before": "never",

    /* General / Sheet */
    indentation: [
      2,
      {
        baseIndentLevel: 0,
      },
    ],
    linebreaks: "unix",
    "no-empty-first-line": true,
    "unicode-bom": "never",

    /**
     * stylelint-scss plugin
     */

    /* @-each */
    "scss/at-each-key-value-single-line": true,

    /* @-else */
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",

    /* @-function */
    "scss/at-function-parentheses-space-before": "never",

    /* @-if @ */
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-no-null": true,

    /* @-mixin */
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-parentheses-space-before": "never",

    /* $-variable */
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": /^[a-z-]+$/,

    /* Map */
    "scss/map-keys-quotes": "always",

    /* Operator */
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,

    /* Selector */
    "scss/selector-no-redundant-nesting-selector": true,

    /* General / Sheet */
    "scss/no-duplicate-dollar-variables": true,
    "scss/no-duplicate-mixins": true,

    // SCSS en CSS module keywords toestaan (begint met '@')
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["/^tailwind$/"],
      },
    ],
  },
  customSyntax: "postcss-html",
}
