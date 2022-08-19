const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-demo-1',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                ],
            },
            {
                test: /\.less$/i,
                loader: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass"),
                        },
                    },
                ],
            },
        ],
    },
};
