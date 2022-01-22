const express = require('express');
// 1.引入cookie-parser
const cookieParser = require('cookie-parser');
const app = express();
// 2.在app上注册 注意，cookieParser是个函数
app.use(cookieParser());

app.get('/', (req, res) => {
	res.send('express框架啊');
});

app.get('/set_cookie', (req, res) => {
	// 3.设置cookie 一组键值对
	/*
    'name': 是键
    'node': 是值
    maxAge: 过期时间，单位是毫秒
  */
	res.cookie('name', 'node', { maxAge: 60 * 60 * 2 * 1000 });
	// 如果不设置关闭时间：浏览器关闭时cookie销毁
	res.cookie('age', 11);
	res.send('设置了cookie信息');
});

// // 4.获取cookie信息
app.get('/get_cookie', (req, res) => {
	let name = req.cookies['name'];
	let age = req.cookies['age'];
	console.log(req.cookies);

	res.send(`获取到的cookie信息为:${name}, ${age}`);
});

app.listen(3000, () => {
	console.log('Express服务器已经在3000端口运行');
});
