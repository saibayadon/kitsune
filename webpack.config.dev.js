// Require
const webpack = require('webpack');
const { resolve } = require('path');
const nodeModulesPath = resolve(__dirname, 'node_modules');
const buildPath = resolve(__dirname, 'build');
const publicPath = resolve(__dirname, 'public');
const mainPath = resolve(__dirname, 'src', 'index.js');

// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server',
        mainPath
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'build'),
        inline: true,
        publicPath: '/',
        port: 8080,
        historyApiFallback: true
    },
    output: {
        path: buildPath,
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    'postcss-loader?sourceMap'
                ]
            }, {
                enforce: "pre",
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "eslint-loader"
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }, {
                exclude: [
                    /\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/
                ],
                loader: 'url-loader',
                options: {
                    name: 'assets/[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({inject: true, template: './public/index.html'})
    ]
};

module.exports = config;
