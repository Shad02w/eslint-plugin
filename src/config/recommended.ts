import type { Linter } from 'eslint'

export const recommended: Linter.Config = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    env: {
        es6: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
        'no-shadow': 'warn',
        'comma-dangle': ['warn', 'never'],
        'react/jsx-max-props-per-line': [1, { maximum: 2, when: 'always' }],
        semi: ['warn', 'never', { beforeStatementContinuationChars: 'always' }],
        'no-var': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: ['function', 'export'] },
            { blankLine: 'always', prev: ['function', 'import', 'cjs-import'], next: '*' },
            { blankLine: 'always', prev: 'function', next: '*' }
        ],
        'lines-between-class-members': ['error', 'always']
    }
}
