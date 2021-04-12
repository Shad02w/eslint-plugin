const { config } = require('./dist')

/** @type {import('eslint').Linter.Config} */
module.exports = {
    ...config.recommended,
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
