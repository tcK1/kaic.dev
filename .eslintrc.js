module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 0,
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'max-len': ['error', { code: 80 }],
  },
};
