import './library/jquery.js';
import cookie from './library/cookie.js';
import { baseUrl } from './library/config.js';

(function() {
    let shop = cookie.get('shop');
    
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
                // console.log(res);



                res.forEach((elm, i) => {
                    // 现在遍历数据时是按照数据库查询得到的结果遍历
                    // cookie中存放的数据 的顺序  和 查询结果的顺序不同
                    // 需要让cookie中的id和查询结果的id 一一对应
                    // 索引不同
                    let arr = shop.filter(val => val.id === elm.id);
                    // console.log(arr);

                    let picture = JSON.parse(elm.picture);

                    template += `<li class="item">
                    <div class="p-box">
                        <input type="checkbox" id="p1">
                    </div>
                    <div class="p-img">
                        <img src="../${picture[0].src}" alt="">
                    </div>
                    <div class="p-title">
                        ${elm.title}
                    </div>
                    <div class="p-num">
                        <input type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                    </div>
                    <div class="p-price">
                        单价:${(elm.price).toFixed(2)}
                    </div>
                    <div class="p-sum">
                        总价:${(elm.price*arr[0].num).toFixed(2)}
                    </div>
                    <div class="p-del">
                        <a href="javascript:;">删除</a>
                    </div>
                </li>`;
                });


                $('.itemlist').append(template);

            }
        });
    }
})();