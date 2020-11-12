import './library/jquery.js';
import './library/jq22.js';

$(function() {
    $('#list>li>a').on('click', function() {
        // console.log(1);
        // 获得 被点击的a元素对应的div元素距离页面顶部的高度
        let top = $(`#${$(this).attr('title')}`).offset().top;
        $('html').animate({
            scrollTop: top
        }, 600);
    });

    $(window).on('scroll', function() {
        // console.log(1);
        // 当前文档距离顶部的高度
        let top = $(document).scrollTop();
        // console.log(top);

        let index = Math.round(top / 600);
        $('#list>li>a').removeClass('active').eq(index).addClass('active');
    });
});




