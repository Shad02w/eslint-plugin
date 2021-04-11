// @ts-check

/** @type {import('eslint').Linter.Config} */
const recommended = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true }
    },
    env: {
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "no-shadow": "warn",
        "comma-dangle": ["warn", "never"],
        "react/jsx-max-props-per-line": [1, { maximum: 2, when: "always" }]
    }
}

module.exports = { recommended }
