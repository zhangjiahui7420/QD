const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const entry = require("./webpack_config/entry_webpack.js");
module.exports = {
    //入口文件
    entry:entry,
        
        // index:'./src/index.js',  //对应出口里面的[name]
        // entry2:'./src/entry2.js'
    
    //出口文件
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8081/'
    },
    //模块
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },{
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:50000,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                },{
                    loader:'sass-loader'
                }
                ]
                },{
                   test:/\.(jsx|js)$/,
                   use:{
                       loader:'babel-loader',
                       options:{
                           presets:[
                               "es2015",
                               "react"
                           ]
                       }
                   },
                   exclude:/node_modules/  //排除
              }
          ]
    },
    //插件
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("css/index.css"),
        new UglifyJsPlugin(),
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase: path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'127.0.0.1',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8081
    }
}