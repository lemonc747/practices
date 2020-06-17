/**
* .eslintrc.js
* @author gya747
* @description 
* @date 2020-06-12T15:58:09.016Z+08:00
* @lastModifier gya747
* @lastModified 2020-06-12T15:59:55.969Z+08:00
* @NOTES 定义node脚本的eslint规则
* @TODOS 
*/

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};