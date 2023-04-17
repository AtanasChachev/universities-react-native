module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 'off',
    'comma-dangle': [
      0,
      { imports: 'never', exports: 'never', functions: 'never' },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['off', { extensions: ['.tsx'] }],
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
