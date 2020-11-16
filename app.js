const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

const app = express();
const usersRouter = require('./router/users');
const productRouter = require('./router/product');

let conf = {
  port: 8888,
  host: '10.31.162.15'
}

//搭建静态服务
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // post表单数据解析成json

app.use(cookieParser());  //cookie在所有路由中间件使用

app.use('/users', usersRouter);
app.use('/product', productRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  // res.redirect('/html/404.html'); //重定向
  res.location('/html/404.html'); //跳转页面
})

app.listen(conf.port, conf.host, () => {
  console.log(`server is running on http://${conf.host}:${conf.port}`);
})