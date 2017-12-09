/**
 * Created by lenovo on 2017/12/7.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1'
    }
});

define(['jquery'],function ($) {
        function Dialog(){
            this.defaultSettings = {   //在类里面定义属性 this.  表示当前实例化对象里面的属性
                width: 500,
                height: 400,
                title: '弹出层',
                content: ''
            };
            this.$container = $('<div class="dialog-container"></div>');
            this.$mask = $('<div class="dialog-mask"></div>');
            this.$box = $('<div class="dialog-box"></div>');
            this.$title = $('<div class="dialog-title"></div>');
            this.$item = $('<div class="dialog-item"></div>');
            this.$close = $('<div class="dialog-close">[X]</div>');
            this.$content = $('<div class="dialog-content"></div>');
    }//属性写在构造函数里面，方法写在原型下面
    Dialog.prototype.open = function (settings) {
            $.extend(this.defaultSettings,settings);
        this.$title.append(this.$item).append(this.$close);
        this.$box.append(this.$title).append(this.$content).css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height
        });

        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
        this.$item.text(this.defaultSettings.title);

        if (this.defaultSettings.content.indexOf('.html') != -1) {
            this.$content.load(this.defaultSettings.content);
        } else {
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on('click',function () {
            this.close()
        }.bind(this));//改变this指向，非立即调用
    };

    Dialog.prototype.close = function () {
        this.$container.remove()
    };



    return Dialog;
});