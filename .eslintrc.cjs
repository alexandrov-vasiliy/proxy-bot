module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],

    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'no-template-curly-in-string': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off'
  },
};
