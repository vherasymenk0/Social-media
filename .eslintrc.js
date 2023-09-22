module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "next",
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ["@typescript-eslint", "react-hooks", "prettier"],
  ignorePatterns: ["src/**/*.test.ts"],
  settings: {
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.scss',
        ],
      },
      typescript: {},
    },
  },
  rules: {
    camelcase: 0,
    'prettier/prettier': 'error',
    radix: 'warn',
    semi: [
      'error',
      'never',
    ],
    'consistent-return': 'off',
    'no-plusplus': 'warn',
    'no-console': [
      'error',
      {
        allow: [
          'error',
          'warn',
          'info',
        ],
      },
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    'no-multiple-empty-lines': [
      'error',
      { max: 1 },
    ],
    'no-extra-parens': 0,
    'no-restricted-syntax': ['off'],
    'no-shadow': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': [
      0,
      'never',
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: [
            'nesting',
            'id',
          ],
        },
      },
    ],
    'jsx-a11y/no-autofocus': 'warn',
    // Typescript
    '@typescript-eslint/semi': [
      'error',
      'never',
    ],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: { '{}': false, object: false },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: [
          'camelCase',
          'PascalCase',
          'UPPER_CASE',
          'snake_case',
        ],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: [
          'camelCase',
          'PascalCase',
        ],
      },
      {
        selector: 'enum',
        format: [
          'UPPER_CASE',
          'PascalCase',
        ],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',

    // React
    'react/jsx-closing-tag-location': 'error',
    'react/destructuring-assignment': [
      0,
      'always',
    ],
    'react/jsx-key': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/sort-comp': 'warn',
    'react/no-unused-prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    // React-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
