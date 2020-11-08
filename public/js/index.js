import './library/jquery.js';
import './library/swiper-3.4.2.jquery.min.js';

let str ="qqqq";
var mySwiper = new Swiper('.swiper-container', {
  autoplay: 3000,//可选选项，自动滑动
  effect : 'fade',
  loop : true,
  pagination: '.swiper-pagination',
  paginationClickable: true,
  prevButton:'.swiper-button-prev',
  nextButton:'.swiper-button-next',
  fade: {
    crossFade: true,
  }
})

let num = 111;