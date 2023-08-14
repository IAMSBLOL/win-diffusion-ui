module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/electron',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'babel',
    'react',
    'promise',
    '@typescript-eslint'
  ],
  rules: {
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute']
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'multiline-ternary': 'off',
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
    'no-empty': ['off', { allowEmptyCatch: true }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/jsx-indent': [0, 2],
    semi: 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'import/no-named-default': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-unknown-property': 0
  },
}
