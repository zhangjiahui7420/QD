const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件
    entry:{
        index:'./src/index.js',  //对应出口里面的[name]
        // entry2:'./src/entry2.js'
    },
    //出口文件
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    //模块
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
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
        })

    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase: path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8081
    }
}