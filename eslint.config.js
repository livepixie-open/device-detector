const js = require("@eslint/js");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const jest = require("eslint-plugin-jest");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      globals: {
        jest: true,
        describe: true,
        it: true,
        expect: true,
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      jest,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs["recommended"].rules,
      ...jest.configs.recommended.rules,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];
