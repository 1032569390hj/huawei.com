import './library/jquery.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';

(function() {
    let shop = cookie.get('shop');
    console.log(shop,'s');
    
    if (shop) { // 有cookie数据才发请求
        shop = JSON.parse(shop);

        let idList = shop.map(elm => elm.id).join();

        $.ajax({
            type: "get",
            url: `${baseUrl}/product/getItems`,
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                let template = '';
                console.log(res);
                let sumPrice = 0;
                let jians = 0;
                res.forEach((elm, i) => {
                    // 现在遍历数据时是按照数据库查询得到的结果遍历
                    // cookie中存放的数据 的顺序  和 查询结果的顺序不同
                    // 需要让cookie中的id和查询结果的id 一一对应
                    // 索引不同
                    let arr = shop.filter(val => val.id === elm.id);
                    console.log(arr,'arr');

                    let picture = JSON.parse(elm.picture);
                    template += `
                        <div class="sc-pro-list clearfix">
                            <label class="checkbox">
                                <input type="checkbox">
                            </label>
                            <div class="sc-pro-area">
                                <div class="sc-pro-main clearfix">
                                    <a href="#">
                                        <img src="../${picture[1].src}" alt="">
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">${elm.title}</a>
                                            <p>夏日彩虹 全网通 6GB+128GB 官方标配</p>
                                            <div class="p-label"><span>分期免息</span></div>
                                        </li>
                                        <li id="p-price">￥${(elm.price).toFixed(2)}</li>
                                        <li>
                                            <input type="text" class="p-stock-text" value=${arr[0].num} min="1" max="${elm.num}">
                                            <p class="p-stock-btn">
                                                <a href="javascript:;" class="">−</a>
                                                <a href="javascript:;" class="">+</a>
                                            </p>
                                        </li>
                                        <li class="p-price-total">¥${(elm.price*arr[0].num).toFixed(2)}</li>
                                        <li><a href="javascript:;" seed="cart-item-del" class="p-del">删除</a></li>
                                    </ul>
                                </div>
                                <div class="p-service-main">
                                    <div class="p-service-list clearfix">
                                        <div class="p-service-info left">
                                            <label class="checkbox"><input type="checkbox" class="vam"></label>
                                            <div class="service-name">
                                                <span>华为无忧服务</span>
                                            </div>
                                            <div class="service-price">
                                                <span>¥699.00</span>
                                            </div>
                                        </div>
                                        <div class="p-service-link right">
                                            <span>（服务范围大于碎屏服务宝与延长服务宝，不能同时购买）</span>
                                            <a href="/product/10086256421124.html" target="_blank">了解详情</a>
                                        </div>
                                    </div>
                                    <div class="p-service-list clearfix">
                                        <div class="p-service-info left">
                                            <label class="checkbox"><input type="checkbox" class="vam"></label>
                                            <div class="service-name">
                                                <span>碎屏(含后盖)服务宝1年</span>
                                            </div>
                                            <div class="service-price">
                                                <span>¥299.00</span>
                                            </div>
                                        </div>
                                        <div class="p-service-link right">
                                            <span></span>
                                            <a href="/product/10086256421124.html" target="_blank">了解详情</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    sumPrice += elm.price*arr[0].num;
                    jians += Number(arr[0].num);
                    console.log(arr[0].num);
                });
                let total = `
                    <label class="checkbox"><input readonly="readonly" class="vam checked" type="checkbox"> 全选</label>
                    <a href="javascript:;">删除</a></div> <div class="sc-total-btn ">
                    <a href="javascript:;">立即结算</a></div> <div class="sc-total-price">
                    <p class="totals">
                        <label>总计：</label>
                        <span>¥&nbsp;${sumPrice.toFixed(2)}</span>
                        <em><b>不含运费</b></em>
                    </p>
                    <div class="total-choose">已选择<em>${jians}</em>件商品，优惠:<span>¥&nbsp;0.00</span></div>
                `;
                $('.sc-total-control').append(total);
                $('.sc-pro').append(template);

            }
        });
    }
})();