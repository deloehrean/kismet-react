/* eslint-disable @typescript-eslint/no-var-requires */

const tsconfig = require('./tsconfig.json');

const isVsCodeAddonDemon = process.argv.some(arg => arg.includes('vscode-eslint'));

// Some features are disabled when using the vscode-eslint addon because it forces
// to specify parserOptions.project, and this greatly reduces performance
const isExtraTsFeaturesEnabled = !isVsCodeAddonDemon;

/**
 * @type {import('eslint').Linter.Config}
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    lib: tsconfig.compilerOptions.lib,
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'import', 'promise'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],

    'no-shadow': 'off',
    'no-nested-ternary': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': [
      'warn',
      { props: true, ignorePropertyModificationsForRegex: ['.*[Rr]ef'] },
    ],
    'no-use-before-define': 'off',
    'no-unsafe-optional-chaining': 'warn',
    'no-unused-variables': 'off',
    'no-promise-executor-return': 'warn',
    'no-continue': 'off',
    'no-await-in-loop': 'off',

    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_[\\w]+$',
        varsIgnorePattern: '^_[\\w]+$',
        caughtErrorsIgnorePattern: '^_[\\w]+$',
      },
    ],

    '@typescript-eslint/no-unnecessary-condition': isExtraTsFeaturesEnabled
      ? ['warn', { allowConstantLoopConditions: true }]
      : 'off',

    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-no-undef': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-key': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-fragments': ['warn', 'element'],
    'react/jsx-no-constructed-context-values': 'warn',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'warn',
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-this-in-sfc': 'off',

    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 'warn',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',

    'import/named': 'warn',
    'import/default': 'off',
    'import/newline-after-import': 'warn',
    'import/namespace': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'warn',
    'prefer-const': ['error', { destructuring: 'all' }],
    'id-denylist': ['warn', 'err', 'e'],
    'default-param-last': 'off',
    'guard-for-in': 'warn',

    'promise/always-return': 'off',
    'promise/catch-or-return': 'warn',

    'no-restricted-syntax': [
      'warn',
      {
        selector: 'Literal[value="N/A"]',
        message: 'Please use `parseNullableValue` util or `DEFAULT_VALUE_IF_NIL` constant',
      },
    ],

    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@apollo/client',
            importNames: ['useQuery', 'useMutation', 'useSubscription'],
            message: 'Please use generated hooks instead',
          },
          {
            name: 'graphql-tag',
            importNames: ['gql'],
            message: 'Please use default import instead',
          },
        ],
      },
    ],
  },
};
