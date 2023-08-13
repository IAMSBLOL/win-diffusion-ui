// const isEnvProduction = process.env.NODE_ENV === 'production';
// const isEnvDevelopment = process.env.NODE_ENV === 'development';
// 注意要和webpack css 的一致
const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';

const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'entry',
      corejs: 3,
      exclude: [
        'transform-typeof-symbol'
      ]
    }
  ],
  ['@babel/preset-react', {
    runtime: 'automatic'
  }],
  '@babel/preset-typescript'
];
const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  [
    '@dr.pogodin/babel-plugin-react-css-modules',
    {
      filetypes: {
        '.less': {
          syntax: 'postcss-less',
        }
      },
      generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
    }
  ],

  ['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }],

  // isEnvProduction && ['babel-plugin-clean-code', {
  //   clearConsole: true,
  //   consoleLevel: ['log', 'error', 'info', 'warn'],
  //   clearDebugger: true,
  // }]
].filter(Boolean)
module.exports = { presets, plugins };
