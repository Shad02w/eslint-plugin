import type { Linter } from 'eslint'

export const baseline: Linter.Config = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
        // eslint
        'no-var': 'error',
        'no-shadow': 'warn',
        'spaced-comment': ['error', 'always'],
        'comma-dangle': ['warn', 'never'],
        semi: ['warn', 'never', { beforeStatementContinuationChars: 'always' }],
        'lines-between-class-members': ['error', 'always'],
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: ['function', 'export'] },
            { blankLine: 'always', prev: ['function', 'import', 'cjs-import'], next: '*' },
            { blankLine: 'always', prev: 'function', next: '*' }
        ],
        // @typescript-eslint/eslint-plugin
        '@typescript-eslint/no-unused-vars': 'warn',
        // eslint-plugin-react
        'react/jsx-max-props-per-line': [1, { maximum: 2, when: 'always' }]
    }
}
