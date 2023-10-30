module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import', 'react-native', 'react'],
  rules: {
    'react-native/no-inline-styles': 0,
    'import/no-unresolved': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
