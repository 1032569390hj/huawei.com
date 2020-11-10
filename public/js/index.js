import './library/jquery.js';
import './library/swiper-3.4.2.jquery.min.js';
import './library/jquery.lazyload.min.js';

//第一个轮播图
let mySwiper = new Swiper('.swiper-container', {
  autoplay: 3000,//可选选项，自动滑动
  effect : 'fade', //切换效果
  loop : true,     //循环播放
  pagination: '.swiper-pagination',  //分页器
  paginationClickable: true,  //点击分页器切换图片
  prevButton:'.swiper-button-prev',  //上一张按钮
  nextButton:'.swiper-button-next',  //下一张按钮
  fade: {
    crossFade: true,
  }
})
//鼠标悬停时停止轮播
let comtainer = $('.swiper-container');
comtainer.on('mouseenter', function() {
  mySwiper.stopAutoplay();
});
//鼠标离开后继续轮播
comtainer.on('mouseleave', function() {
  mySwiper.startAutoplay();
});

//广告轮播图
let bannerSwiper = new Swiper('#bannerswiper', {
  autoplay: 3000,//可选选项，自动滑动
  effect : 'fade', //切换效果
  loop : true,     //循环播放
  pagination: '.swiper-pagination',  //分页器
  paginationClickable: true,  //点击分页器切换图片
  prevButton:'.swiper-button-prev',  //上一张按钮
  nextButton:'.swiper-button-next',  //下一张按钮
  fade: {
    crossFade: true,
  }
})

//商品轮播
let listSwiper = new Swiper('.swipers', {
  prevButton:'.swiper-button-prev',
  nextButton:'.swiper-button-next',
});

var fdline = new Swiper('.fd-line',{
  prevButton:'.swiper-button-prev',
  nextButton:'.swiper-button-next',
  })

//图片懒加载
$(function() {
  $("img.lazy").lazyload({
    placeholder: "../img/layzeimg.gif",
    effect: "fadeIn",
  });
});
