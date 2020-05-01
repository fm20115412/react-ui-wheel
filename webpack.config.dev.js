const base = require('./webpack.config')
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        index: './example.tsx'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
            //会使用根目录下的index.html作为模板
        })
    ],
});