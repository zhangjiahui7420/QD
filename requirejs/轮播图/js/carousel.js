/**
 * Created by lenovo on 2017/12/9.
 */
define(['jquery',function ($) {
    function Carousel() {
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span>&lt;</span>');
        this.$next = $('<span>&gt;</span>');

        this.defaultSettings = {
            imgArr: [],
            speed: 1000,
            buttonStyle: 'square',
            selector: document.body  //选择器,配置图片位置
        };

    }

    Carousel.prototype.init = function (settings) {
        $.extend(this.defaultSettings,settings);
        this.$arrows.append(this.$prev).append(this.$next);
        this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows).appendTo(this.defaultSettings.selector)
        for(var i;i<this.defaultSettings.imgArr.length;i++){
            this.$imgs.append('<img src="'+ this.defaultSettings.imgArr[i]+'"/>');
            this.$nav.append('<li>'+ (i+1)+'</li>');
        }

    }
}]);