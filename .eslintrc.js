module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-restricted-exports": "off",
    "no-nested-ternary": "off",
    "react/jsx-filename-extension": "off",
    "linebreak-style": "off",
    quotes: "off",
    "react/jsx-one-expression-per-line": "off",
    "comma-dangle": "off",
  },
};
