const path = require('path');
const htmlwebpack = require('html-webpack-plugin');

const config = {
    entry: './index.js',
    resolve: {
        extensions: ["*", ".js"]
    },
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            },
            {
                test:/\.css$/,
                exclude: '/node_modules/',
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new htmlwebpack({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: './build',
        port: 9001,
        open: true,
        historyApiFallback: true
    }
}

module.exports = config;