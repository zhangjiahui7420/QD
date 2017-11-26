/**
 * Created by lenovo on 2017/11/26.
 */
$(function () {
    // 搜索框
    $('#inputSearch').on('focus',function () {
        if(this.value===this.defaultValue){
            this.value='';
        }
        }).on('blur',function () {
            if(this.value === ''){
                this.value = this.defaultValue;
            }
    });

    // 导航菜单
    $('#nav li').hover(function () {
        $(this).children('.jnNav').show()
    },function () {
        $(this).children('.jnNav').hide()
    });


    // hot
    $('#jnCatalog .promoted').append('<span class="hot"></span>');

    // 轮播图
    // 改变图片层级关系
    var $imgs = $('#JS_imgWrap img');
    $imgs.each(function (index , elem) {
        $(elem).css('zIndex',function () {
            return $imgs.length - index
        });
    });

    $('#jnImageroll > div')


    });


