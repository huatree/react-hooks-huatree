module.exports = {
  extends: ['eslint-config-huatree/typescript', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    "import/namespace":  ["error", { "allowComputed": true }]
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
