// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      mocha: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    // add your custom rules here
    'rules': {
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': 'off',
    }
  }
