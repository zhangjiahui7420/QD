const path = require('path');
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
    module:{},
    //插件
    plugins:[],
    //配置webpack开发服务功能
    devServer:{}
}