const p = require('path')
module.exports = {
    entry: './lib/index.tsx',
    output:{
        path:p.resolve(__dirname,'dist')
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
    }
};