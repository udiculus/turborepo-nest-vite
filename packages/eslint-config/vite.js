/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['dist'],
  extends: [
    './base.js',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'react-refresh'],
  env: {
    browser: true,
    es2020: true,
  },
  rules: {
    // react-hooks rules from recommended config
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // react-refresh rule
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      // Add TypeScript-specific rules or settings here if needed
    },
  ],
};
