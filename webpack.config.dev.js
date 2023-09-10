process.traceDeprecation = true;

// Require
const { resolve } = require('path');

const buildPath = resolve(__dirname, 'build');
const mainPath = resolve(__dirname, 'src', 'index.jsx');

// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');

const config = {
  mode: 'development',
  entry: [mainPath, 'webpack-plugin-serve/client'],
  devtool: 'inline-source-map',
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        exclude: [/(^|\.(svg|css|json|js|jsx|ts|tsx|html))$/],
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new WebpackPluginServe({
      port: 3000,
      static: buildPath,
    }),
    new ESLintPlugin({
      cache: true,
      files: './src',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/',
          to: '[name].[ext]',
        },
      ],
    }),
    new HtmlWebpackPlugin({ inject: true, template: './src/index.html' }),
  ],
  watch: true,
};

module.exports = config;
