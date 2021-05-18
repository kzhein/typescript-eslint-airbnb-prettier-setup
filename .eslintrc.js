module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
  },
};
