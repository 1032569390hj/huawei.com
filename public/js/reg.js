import './library/jquery.js';
import './library/jquery.md5.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';

$(function() {
    let phoneReg = /^1[3-9]\d{9}/; //手机号码正则
    let infoReg = /[A-z0-9]{4}/; //验证码
    let passReg = [
        /^.{6,16}$/, // 限定长度
        /[A-Z]+/, // 验证大写字母
        /[a-z]+/, // 验证小写字母
        /\d+/, // 验证数字
        /[^A-z0-9]+/ // 验证特殊符号   
    ];
    var email = /^[A-z]\w{5,15}@[A-z0-9-]{2,}\.[A-z]{2,7}\.?[A-z]*$/; //验证邮箱 用户名6-16位 以字母开头 用户名@域名

    //tab切换
    let btn = $('.tabs-btn>li');
    $('.tabs-btn>li').on('click',function() {
        $(this).addClass('tabs-items').siblings().removeClass('tabs-items');
        let index = btn.index(this);
        $('.hwid-reg-detail').eq(index).addClass('active').siblings().removeClass('active');
    });

    $('.hwid-reg-detail').on('change',function(e) {
        let target = e.target;
        //手机号码
        if (target.name === 'phone') {
            $('.phoneinfo').empty();
            if(phoneReg.test($('[name=phone]').val())) {
                $('.phoneinfo').append(`<span>*&nbsp;&nbsp;手机号码输入正确</span>`);
            } else {
                $('.phoneinfo').append(`<span style="color:red">*&nbsp;&nbsp;输入错误</span>`);
            };
        };
        //验证码
        if (target.name === 'infonum') {
            $('.shortinfo').empty();
            if(infoReg.test($('[name=infonum]').val())) {
                console.log('kkk');
                $('.shortinfo').append(`<span>*&nbsp;&nbsp;输入正确</span>`);
            } else {
                $('.shortinfo').append(`<span style="color:red">*&nbsp;&nbsp;输入错误</span>`);
            };
        }
        //密码
        if (target.name === 'password') {
            $('.psdinfo').empty();
            let that = $('[name=password]').val();
            let check = passReg.map(function(elm) {
                // 遍历数组 
                // 使用数组种的每一个正则 验证输入框的字符串
                // 将所有验证的结果 返回成一个数组  数组种存放了 5个布尔值
                return elm.test(that);
            });
            console.log(check[0],'check');
            let strength = check.reduce(function(obj, current) {
                current && obj.count++;
                return obj;
            }, {
                count: 0
            });
            console.log(strength,'kk');
            if (check[0]) {
                switch (strength.count) {
                    case 2:
                        $('.psdinfo').append('<span style="color:red">弱</span>');
                        break;
                    case 3:
                        $('.psdinfo').append('<span style="color:orage">中</span>');
                        break;
                    case 4:
                        $('.psdinfo').append('<span>强</span>');
                        break;
                };
            } else {
                $('.psdinfo').append('<span style="color:red">密码长度不足6位</span>');
            };
        }
        //确认密码
        if (target.name === 'refpassword') {
            $('.refpsdinfo').empty();
            if ($('[name=password]').val() === $('[name=refpassword]').val()) {
                $('.refpsdinfo').append('<span>密码输入正确</span>');
            } else {
                $('.refpsdinfo').append('<span style="color:red">密码输入不正确</span>');
            }
        }
    });
});

$('#submit').on('click', function() {
    // 省略1万字的表单验证环节

    let password = $.md5($('[name=password]').val());
    $.ajax({
        type: "post",
        url: `${baseUrl}/users/regs`,
        data: {
            password: password,
            phone: $('[name=phone]').val(),
        },
        dataType: "json",
        success: function(res) {
            console.log(res);
            if (res.phone === $('[name=phone]').val()) {
                alert(`${res.msg}`);
                location.href='/html/login.html';
            } else {
                alert(`${res.msg}`);
            }
        }
    });
});
