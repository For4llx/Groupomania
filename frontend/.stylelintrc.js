module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    // recommended rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
  plugins: ['stylelint-scss'],
};
