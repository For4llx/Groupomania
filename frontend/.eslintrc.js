const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:vue/essential', 'airbnb-base'],
  // add your custom rules here
  rules: {},
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.vue', '.json'],
        map: [
          ['~', path.resolve(__dirname, './')],
          ['@', path.resolve(__dirname, './')],
        ],
      },
    },
  },
};
