/**
 * Created by lenovo on 2017/12/3.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
require(['jquery','dialog'],function ($,Dialog) {
    $('#open').on('click',function () {
       var setting = {
           width:300,
           height:200,
           title:'注册',
           content:'reigist.html'
       };

        var dl = new Dialog()
        dl.open(settings);
    });
});