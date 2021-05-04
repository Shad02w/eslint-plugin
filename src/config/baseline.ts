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
        quotes: ['warn', 'single', { allowTemplateLiterals: true }],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        semi: ['warn', 'never', { beforeStatementContinuationChars: 'always' }],
        'lines-between-class-members': ['error', 'always'],
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: ['function', 'export'] },
            { blankLine: 'always', prev: ['function', 'cjs-import'], next: '*' },
            { blankLine: 'always', prev: 'function', next: '*' }
        ],
        // @typescript-eslint/eslint-plugin
        '@typescript-eslint/no-unused-vars': 'warn',
        // eslint-plugin-react
        'react/jsx-max-props-per-line': [1, { maximum: 2, when: 'always' }],
        // eslint-plugin-eslint-comments
        'eslint-comments/no-unused-disable': 2,
        'eslint-comments/require-description': [
            'error',
            {
                ignore: ['eslint-enable', 'eslint-env', 'exported', 'global', 'globals']
            }
        ],
        // eslint-plugin-import
        'import/no-relative-parent-imports': 'error',
        'import/no-useless-path-segments': 'error',
        'import/exports-last': 'error',
        'import/first': 'error',
        'import/no-default-export': 'error',
        'import/newline-after-import': ['error', { count: 1 }],
        // eslint-plugin-react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
}
