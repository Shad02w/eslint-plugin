import type { Linter } from 'eslint'

export const baseline: Linter.Config = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['eslint-comments', 'import', 'react-hooks'],
    rules: {
        // eslint
        'no-var': 'error',
        'no-shadow': 'warn',
        'spaced-comment': ['error', 'always'],
        'comma-dangle': ['warn', 'never'],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
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
        'react/jsx-max-props-per-line': [1, { maximum: 2, when: 'always' }],
        // eslint-plugin-eslint-comments
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/require-description': [
            'error',
            {
                ignore: ['eslint-enable', 'eslint-env', 'exported', 'global', 'globals']
            }
        ],
        // eslint-plugin-import
        'import/no-relative-parent-import': 'error',
        'import/prevent-default-import': 'error',
        'import/no-useless-path-segments': 'error',
        // eslint-plugin-react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
}
