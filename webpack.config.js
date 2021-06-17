const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname, 'src/');
const ENTRIES_DIR = path.resolve(SOURCE_DIR, 'entries/');

const analyzer = process.argv[4] !== undefined && process.argv[4].substring(2).includes('analyzer=true');

module.exports = {
  watch: process.env.NODE_ENV === 'development',
  cache: true,
  context: SOURCE_DIR,
  entry: {
    'philly-innovation-widget': path.resolve(ENTRIES_DIR, 'widget-entry.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name].js',
    publicPath: 'build',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules\/(?!@vvvroom)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-env',
              ['@babel/preset-typescript', { jsxPragma: 'h' }],
              'babel-preset-preact'
            ],
            plugins: [
              ['@babel/transform-runtime', {
                'regenerator': true
              }],
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              '@babel/plugin-syntax-dynamic-import',
              '@babel/proposal-class-properties',
              '@babel/proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        include: [
          path.resolve(SOURCE_DIR, 'app'),
          path.resolve(SOURCE_DIR, 'entries')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      index: 'build/index.html',
      disableDotRule: true
    },
    port: 8082
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
  ].concat(analyzer ? [
    new BundleAnalyzerPlugin()
  ] : []) 
};
