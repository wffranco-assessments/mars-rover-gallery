module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    '@wffranco/eslint-config',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  overrides: [
    {
      files: ['**/*.{j,t}s?(x)'],
      env: {
        mocha: true,
      },
    },
    {
      files: ['**/*.test.{j,t}s?(x)'],
      env: {
        mocha: true,
      },
      globals: {
        expect: true,
      },
    },
  ],
};
