"use strict";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname, // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/251
    useJSXTextNode: true,
  },

  plugins: ["@typescript-eslint" ],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],

  rules: {
    "@typescript-eslint/no-namespace": "off",
  },
};
