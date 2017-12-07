/**
 * Created by lenovo on 2017/12/7.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});
// 文件名不是jquery的时候需要配置

define(['jquery'],function ($) {
    return {
        open:function (settings) {    //接收一个对象
            var defaultSettings = {
                width: 500,
                height: 400,
                title: '弹出层',
                content: ''
            };
            $.extend(defaultSettings,settings);
            var html = '<div class="dialog-container">'
                + '<div class="dialog-mask"></div>'
                + '<div class="dialog-box">'
                + '<div class="dialog-title">'
                + '<div class="dialog-item">' + defaultSettings.title + '</div>'
                + '<div class="dialog-close">[X]</div>'
                + '</div>'
                + '<div class="dialog-content"></div>'
                + '</div>'
                + '</div>';
             $(document.body).append(html);//点的时候出现Dom结构
             $('.dialog-box').css({
                 width:defaultSettings.width,
                 height:defaultSettings.height
             });
             if(defaultSettings.content.indexOf('.html')!= -1){
                 $('.dialog-content').load(defaultSettings.content);
             }else{
                 $('.dialog-content').html(defaultSettings.content);
             }
             $('.dialog-close').on('click',function () {
                 $(this).closest('.dialog-container').remove();  //closest找到就不在往上找了，parent一直找到根元素
             });

        }
    };
});