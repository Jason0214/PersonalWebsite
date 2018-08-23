// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    "mocha"
  ],
  env: {
    es6: true,
  },
  rules: {
    "mocha/no-exclusive-tests": "error"
  }
}
