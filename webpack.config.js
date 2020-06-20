const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, './assets/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
            {
                test: /\.txt$/, use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './frontend/index.html'}),
        new ExtractTextPlugin({filename: './css/bundle.css'})
    ]
}