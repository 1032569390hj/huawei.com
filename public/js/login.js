import './library/jquery.js';
import './library/jquery.md5.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';

$('.login-btn').on('click', function() {
    let password = $.md5($('[name=password]').val());

    $.ajax({
        type: "post",
        url: `${baseUrl}/users/login`,
        data: {
            password: password,
            phone: $('[name=phone]').val(),
        },
        dataType: "json",
        success: function(res) {
            console.log(res);
            res.forEach(item => {
                if (String(item.user_phone) === $('[name=phone]').val()) {
                   alert('登录成功');
                   window.location.href = '/';
                }
            })
        }
    });
})