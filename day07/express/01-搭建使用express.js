// 1.引入
const express = require('express');

// 2.创建项目对象
const app = new express();

// 3.处理请求
// .get表示处理get请求
app.get('/', (req, res) => {
	// req是请求对象，res响应对象

	res.send('hello express框架!');
});

// 4.监听是否有请求
app.listen(3000, err => {
	if (err) {
		console.log(err);
		return;
	}
	// 这里的代码会在服务器启动时执行
	console.log('express web server is listen in port 3000! ');
});
