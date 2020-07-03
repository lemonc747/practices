/**
* .eslintrc.js
* @author gya747
* @description 
* @date 2020-06-12T15:58:09.016Z+08:00
* @lastModifier gya747
* @lastModified 2020-06-12T15:59:55.969Z+08:00
* @NOTES 定义node脚本的eslint规则
1. src中代码为typescript
2. 除了src代码，其他为node代码
* @TODOS 
*/

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'node',
  ],
  extends: [
    // 'eslint:all',
    'eslint:recommended',
    'plugin:node/recommended',
    // 'eslint-config-egg',
    // 'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // ************ basic rules ***************
    'no-var': 'error',
    'no-unused-vars': 1,
    'no-process-exit': 1, //todos

    // ************ node rules *****************
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": ["error", "always"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error"
}
};