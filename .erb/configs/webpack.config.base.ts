import webpack from 'webpack';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';

const babelOptions = require(webpackPaths.appBabelrc)

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      // js
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // include: webpackPaths.srcPath,
        use: [
          // 为啥ts-loader在后边会影响babelOptions的执行
          {
            loader: 'ts-loader',
            options: {
              // Remove this line to enable type checking in webpack builds
              transpileOnly: true,
              compilerOptions: {
                module: 'esnext',
              },
            },
          },
          {

            loader: require.resolve('babel-loader'),
            options: {
              ...babelOptions,
              cacheDirectory: true,
              // See #6846 for context on why cacheCompression is disabled
              cacheCompression: false,
              // compact: isEnvProduction,
            },
          },
        ]
      },
      {
        test: /\.svg$/,
        // exclude
        use: [
          {
            loader: require.resolve('@svgr/webpack'),
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
      {
        test: /\.(md|glsl)$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      // css
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    // There is no need to add aliases here, the paths in tsconfig get mirrored
    plugins: [new TsconfigPathsPlugins()],
    alias: {
      '@api': webpackPaths.resolveApp('src/renderer/axios'),
      '@views': webpackPaths.resolveApp('src/renderer/views'),
      '@router': webpackPaths.resolveApp('src/renderer/router'),
      '@reducer': webpackPaths.resolveApp('src/renderer/controller/reducer'),
      '@src': webpackPaths.srcPath,
      '@ghooks': webpackPaths.resolveApp('src/renderer/ghooks'),
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};

export default configuration;
