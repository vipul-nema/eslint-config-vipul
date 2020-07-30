module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    jest: true,
    browser: true,
    es6: true,
    jquery: true,
  },
  parser: 'babel-eslint',
  plugins: ['jest', 'prettier'],
  rules: {
    'no-prototype-builtins': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'warn',
    ],
  },
};
