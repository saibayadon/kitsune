// Require
const webpack = require('webpack');
const path = require('path');
const { resolve } = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'build');
const publicPath = path.resolve(__dirname, 'public');
const mainPath = path.resolve(__dirname, 'src', 'index.js');

// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: {
        main: mainPath,
        vendor: ['react', 'react-dom']
    },
    output: {
        path: buildPath,
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader?minimize=true&importLoaders=1!postcss-loader'
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader?minimize=true&modules=true&importLoaders=1!postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/],
                loader: 'url-loader',
                options: {
                    limit: 2000,
                    name: 'assets/[hash:8].[ext]'
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: 'index.[chunkhash:8].html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ]
};

module.exports = config;
