const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');
const path = require("path");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.styl', '.css'],
        alias: {
            '@': resolve('./src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(sass|less|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};
