/**
 * Created by yuyuanlin on 2018/6/29.
 *
 */
const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //用于清空文件
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 用于创建html模板
const development = (process.env.MODE == 'development'?true:false);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeModulePath = path.resolve(__dirname, './node_modules');

module.exports = {
    entry:{
        home:"./src/entry/index.js",
    },
    output: {
        filename: '[name].[chunkhash:5].js',
        path: path.resolve(__dirname, './bin/dist'),
        publicPath: "/static/",
        chunkFilename: '[name].chunk.[chunkhash:5].js'
    },
    devtool:'inline-source-map',
    module:{
        //noParse: /node_modules\/*/,
        //任何与noParse正则表达式相匹配的文件都不会被webpack解析，注意忽略的而文件中不应该有import，require,define等被调用的而文件
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"
                    /*                    development?"style-loader":MiniCssExtractPlugin.loader,//当是开发模式下时可以为style-loader
                     {
                     loader: 'css-loader',
                     options: {
                     minimize:development?true:false
                     }
                     }*/
                ],
                exclude:[nodeModulePath]
            },
            {
                test:/\.scss$/,
                use:[
                   //development?MiniCssExtractPlugin.loader:MiniCssExtractPlugin.loader,//当是开发模式下时可以为style-loader
                    'css-loader',
                    'sass-loader'
                ],
                exclude:[nodeModulePath]
            },
            {
                test:/\.jsx?$/,
                use:['babel-loader'],
                exclude:[nodeModulePath]
            },{
                test: /\.(woff|svg|ttf|eot)$/,
                use: ['file-loader'],
                exclude:[nodeModulePath]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: ['file-loader'],
                exclude:[nodeModulePath]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['./bin/dist']),
        new MiniCssExtractPlugin({
            filename: development?"[name].css":'[name].[hash].css',
            chunkFilename: development?"[id].css":'[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'my first webpack+react+demo',
            fileName:'index.html',
            template:'./src/entry/index.html',
        })
    ],
    optimization:{
        //minimize: true,
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                }
            }
        }
    },
    resolve: {
        alias:{
            node_modules:__dirname+"/node_modules",
            components:__dirname+"/src/components",
            common:__dirname+"/src/common",
            modules:__dirname+"/src/modules",
            theme:__dirname+"/src/theme",
            reduxs:__dirname+"/src/redux"
        }
    }

}