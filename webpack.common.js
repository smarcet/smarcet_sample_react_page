const HtmlWebpackPlugin         = require('html-webpack-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const Dotenv                    = require('dotenv-webpack');
const MiniCssExtractPlugin      = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.ejs'
        }),
        new Dotenv(
            {
                expand: true
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                { "targets": { "node": "current" } }
                            ],
                            '@babel/preset-react'
                        ],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less/,
                exclude: /\.module\.less/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.module.less/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.scss/,
                exclude: /\.module\.scss/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contenthash].[ext]",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
            {
                test: /\.jpg|\.png|\.gif|\.svg$/,
                use: "file-loader?name=images/[name].[ext]"
            },
            {
                test: /\.yaml$/,
                use: 'js-yaml-loader',
            }
        ]
    },
};
