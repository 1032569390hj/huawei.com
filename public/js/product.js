import './library/jquery.js';
import './library/jq22.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';

(function() {
    let id = location.search.split('=')[1]; // 获得商品id
    
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getItem`,
        data: {id: id},
        dataType: "json",
        success: function(res) {
            console.log(res);
            res = res[0];
            let picture = JSON.parse(res.picture);
            let template = `
            <div class="detailes">
            <div class="product-meta">
                <h1 id="pro-name">${res.title}</h1>
                <p class="product-slogan">
                    <a href="javascript:;" class="product-slogan-link">${res.subtitle}</a>
                </p>
            </div>
            <div class="product-info">
                <div class="product-price">
                    <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                    <i>￥${res.price}</i>
                </div>
                <div class="product-info-list clearfix">
                    <p class="left">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</p>
                    <div class="product-prom left show">
                        <div class="product-prom-item clearfix">
                            <span class="left">商品赠券</span>
                            <div title="赠华为手机摄影课程" class="product-prom-con left">赠华为手机摄影课程</div>
                        </div>
                        <div class="product-prom-item clearfix">
                            <span class="left">赠送积分</span>
                            <div class="product-prom-con left">购买即赠商城积分，积分可抵现~</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-pulldown clearfix product-description">
                <span class="left">服务说明</span>
                <div class="left product-description-list">
                    <ul>
                        <li>已满48元已免运费</li>
                        <li>由华为商城负责发货，并提供售后服务</li>
                    </ul>
                </div>
            </div>
            <div class="product-description clearfix f">
                <span class="left">商品编码</span>
                <span class="left pro-sku">2601010234001</span>
            </div>
            <div class="pro-skus">
                <div class="product-choose clearfix  product-choosepic">
                    <span class="left">选择颜色</span>
                    <ul class="left">
                        <li class="active">
                            <a href="#" title="亮黑色">
                                <img src="../${picture[0].src}" alt="">
                                <p>亮黑色</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="亮黑色">
                                <img src="../${picture[1].src}" alt="">
                                <p>亮黑色</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="亮黑色">
                                <img src="../${picture[2].src}" alt="">
                                <p>亮黑色</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="亮黑色">
                                <img src="../${picture[3].src}" alt="">
                                <p>亮黑色</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="product-choose clearfix ">
                    <span class="left">选择版本</span>
                    <ul class="left">
                        <li class="active">
                            <a href="#" title="亮黑色">
                                <p>5G全网通 8GB+256GB</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="亮黑色">
                                <p>5G全网通 8GB+512GB</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="亮黑色">
                                <p>5G全网通 8GB+128GB</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="product-choose clearfix ">
                    <span class="left">选择套餐</span>
                    <ul class="left">
                        <li class="active">
                            <a href="#" title="亮黑色">
                                <p>官方标配</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="product-choose clearfix "></div>
            </div>
            <div class="product-description clearfix hide">
                <span class="left">保障服务</span>
                <div class="product-property-con clearfix left">
                    <ul class="product-service left">
                        <li>
                            <a href="#">
                                <span class="left max-w">华为无忧服务</span>
                                <span class="left"> ￥1299</span>
                            </a>
                            <div class="product-service-detail">
                                <div class="product-service-list">
                                    <ul>
                                        <li>
                                            <input type="checkbox" name="ucareName">
                                            <span class="max-w">华为无忧服务</span>
                                            <i> ￥1299</i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="product-service left">
                        <li>
                            <a href="#">
                                <span class="left max-w">碎屏服务宝1年</span>
                                <span class="left">￥499</span>
                            </a>
                            <div class="product-service-detail">
                                <div class="product-service-list">
                                    <ul>
                                        <li>
                                            <input type="checkbox" name="ucareName">
                                            <span class="max-w">碎屏服务宝1年</span>
                                            <i> ￥1299</i>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="ucareName">
                                            <span class="max-w">碎屏(含后盖)服务宝1年</span>
                                            <i> ￥1299</i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="product-service left">
                        <li>
                            <a href="#">
                                <span class="left max-w">延长服务宝1年</span>
                                <span class="left">￥368</span>
                            </a>
                            <div class="product-service-detail">
                                <div class="product-service-list">
                                    <ul>
                                        <li>
                                            <input type="checkbox" name="ucareName">
                                            <span class="max-w">延长服务宝1年</span>
                                            <i> ￥1299</i>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="ucareName">
                                            <span class="max-w">延长服务宝半年</span>
                                            <i> ￥1299</i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="Recommend product-description clearfix">
                <span class="left">推荐</span>
                <ul class="left">
                    <li>
                        <a href="#">HUAWEI Mate 40 Pro+</a>
                    </li>
                    <li>
                        <a href="#">HUAWEI Mate 30E Pro</a>
                    </li>
                    <li>
                        <a href="#">HUAWEI Mate 40 RS保时捷设计</a>
                    </li>
                    <li>
                        <a href="#">HUAWEI P40 Pro</a>
                    </li>
                </ul>
            </div>
            <div class="product-operation-main product-operation-location">
                <div class="product-description clearfix">
                    <span class="left">已选择商品:</span>
                    <div class="pro-sku left">亮黑色 / 5G全网通 8GB+256GB / 官方标配 </div>
                </div>
            </div>
            <div class='product-operation clearfix'>
                <div class="product-stock left">
                    <input type="number" placeholder="1" value="1" min="1" max="${res.num}">
                </div>
                <div class="product-buttonmain left">
                    <a href="#" id="additem">加入购物车</a>
                    <a href="#">立即下单</a>
                </div>
            </div>
        </div>
            `;
            $('.detail').append(template).find('#additem').on('click', function() {
                addItem(res.id, $('#num').val());
            });
            $('.product-choose>ul>li').on('click', function() {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    });

    
    function addItem(id, num) {
        let shop = cookie.get('shop'); // 从cookie中获得shop数据
        console.log(shop,'shop');
        let product = {
            id: id,
            num: num
        }

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop); // 将取出的cookie数据转成对象

            // 判断cookie中的购物车数据 是否已存在本条数据的id
            // 如果本条数据的id已存在 修改数量
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(el => {
                    el.id === id ? el.num = num : null;
                });
            } else {
                shop.push(product);
            }

        } else { // cookie中不存在shop数据
            shop = []; // 设置一个数组
            shop.push(product); // 将当前商品存入数组
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }

})();

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

    // 监听事件
    window.addEventListener('scroll', function(){
        let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
        if(t>730){
            $('.list').addClass('tab-item')
            $('list').addClass('hr2');
        }else{
            $('.list').removeClass('tab-item');
            $('list').removeClass('hr2');
        }
    })
});


