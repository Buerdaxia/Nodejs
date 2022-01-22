const express = require('express');
const passportRouter = require('./routes/passport');
// 引入校验函数
const { checkLogin } = require('./utils/index');
const app = express();

// 使用express官方中间件;
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 解析json格式

// 注册路由
app.use(checkLogin, passportRouter);
// 注册时，添加上func函数,就会变成一个钩子函数

app.listen(3000, () => {
	console.log('Express web server is listen  at port 3000!');
});
