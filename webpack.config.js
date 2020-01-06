const p = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    output:{
        path:p.resolve(__dirname,'dist')
    },
    mode:'development',
    resolve:{
        extensions : ['.ts','.tsx','.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './index.html'
            //会使用根目录下的index.html作为模板
        })
    ]
};