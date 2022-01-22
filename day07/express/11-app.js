const express = require('express');
const path = require('path');
const fs = require('fs');

// 引入路由文件
const passportRouter = require('./routes/passport');
const indexRouter = require('./routes/index');
const app = new express();
// 使用express官方中间件
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 解析json格式

// 将路由对象注册到app下
app.use(passportRouter);
app.use(indexRouter);

app.listen(3000, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('express web server is listen in port 3000! ');
});
