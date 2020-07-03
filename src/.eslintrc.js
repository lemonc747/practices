
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['../tsconfig.json'],
  },
  // parser: 'babel-eslint',
  // extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  extends: [
    // "airbnb-typescript",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    '@typescript-eslint',
    // @gya-notes: 
    'react',
    "react-hooks"
  ],
  env: {
    browser: true,
    // node: true,
    es6: true,
    // mocha: true,
    // jest: true,
    // jasmine: true,
  },
  globals: {
    // APP_TYPE: true,
    // page: true,
  },
  rules: {
    // 'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // 'react/jsx-wrap-multilines': 0,
    // 'react/prop-types': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/jsx-one-expression-per-line': 0,
    // // react无状态的纯函数：从Error改为Warning
    // 'react/prefer-stateless-function': 1,
    // 'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    // 'import/no-extraneous-dependencies': [
    //   2,
    //   {
    //     optionalDependencies: true,
    //     devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js'],
    //   },
    // ],
    // 'jsx-a11y/no-noninteractive-element-interactions': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'linebreak-style': 0,

    // "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],

    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "error"

    // note you must disable the base rule as it can report incorrect errors
    // "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": ["error", {
    //   "vars": "all",
    //   "args": "after-used",
    //   "ignoreRestSiblings": false
    // }],

    "react-hooks/rules-of-hooks": "error",
    // support Recoil
    "react-hooks/exhaustive-deps": [
      "warn", {
        "additionalHooks": "useRecoilCallback"
      }
    ],

    '@typescript-eslint/no-array-constructor': 'warn',

    // disable the rule for all files
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "react/display-name": 0,
  },
  settings: {
    "react": {
      "version": "detect",
    }
    // polyfills: ['fetch', 'promises', 'url'],
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      // disable the rule for tsx because tsx exports React Component
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["warn"]
      }
    }
  ]
};
