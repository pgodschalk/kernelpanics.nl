module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-config-recommended-vue",
    "stylelint-config-prettier",
    "stylelint-config-css-modules",
  ],
  plugins: ["stylelint-scss"],
  customSyntax: "postcss-html",
}
