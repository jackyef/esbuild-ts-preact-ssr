const prettierConfig = require('./.prettierrc.js');

module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true
  },

  plugins: ['eslint-plugin-prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],

  rules: {
    // prettier rules
    'prettier/prettier': ['error', prettierConfig]
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json']
      },
      plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier'
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off'
      }
    }
  ]
};
