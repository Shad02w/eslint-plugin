/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        node: true
    },
    rules: {
        'no-unused-vars': 'off'
    },
    overrides: [
        {
            files: ['.eslintrc.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 0
            }
        }
    ]
}
