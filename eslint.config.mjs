import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {ignores: ["node_modules/", "dist/", "\\*.html"]},
  {languageOptions: {globals: {...globals.browser, ...globals.node}}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {rules: {
    "@typescript-eslint/no-unused-expressions": "off",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "comma-spacing": ["error"],
    "complexity": ["error", 10],
    "computed-property-spacing": ["error", "never"],
    "eqeqeq": "error",
    "func-call-spacing": ["error"],
    "keyword-spacing": ["error"],
    "no-console": "error",
    "no-multiple-empty-lines": "error",
    "object-curly-spacing": ["error"],
    "rest-spread-spacing": ["error"],
    "semi-spacing": "error",
    "semi": "error",
    "switch-colon-spacing": "error",
    "template-curly-spacing": "error",
  }}
];