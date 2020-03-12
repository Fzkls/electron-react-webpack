/*
 * @Descripttion: 
 * @version: 
 * @Author: ShiJingWei
 * @Date: 2020-03-11 11:11:58
 * @LastEditors: ShiJingWei
 * @LastEditTime: 2020-03-12 15:27:47
 */
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var APP_PATH = path.resolve(__dirname, 'app');
var SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    cache: true,
    target: 'electron',
    devtool: 'source-map',
    entry: {
        index: './src/ui/index'
    },
    output: {
        path: APP_PATH,
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                include: [
                    SRC_PATH,
                ],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.js|\.jsx?$/,

                // Options to configure babel with
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            { 
                test:/\.(le|c)ss$/, 
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ] 
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // 除非有定义 process.env.NODE_ENV，否则就使用 'development'
            DEBUG: false
        }),
        new CopyWebpackPlugin([
		    { from: path.resolve(SRC_PATH, 'main.js'), to: 'main.js' },
            { from: path.resolve(SRC_PATH, 'ui/index.html'), to: 'index.html' },
            { from: path.resolve(SRC_PATH, 'package.json'), to: 'package.json' }
        ])
    ]
};
