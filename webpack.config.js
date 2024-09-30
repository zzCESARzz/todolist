const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test:/\.css$/,
                exclude: /styles.css$/,
                use:['style-loader', "css-loader"]
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },

    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtract({
            filename: 'styles.css',
            ignoreOrder: false,
        }),
        new  CopyPlugin({
            patterns:[
                {from: 'src/assets/', to: 'assets/'}
            ]

        }),
    ]
}