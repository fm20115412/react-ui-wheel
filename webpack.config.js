const p = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: p.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            }
        ]
    },
};