// 1.引入
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = new express();

// 在一个项目中，会有一个静态资源文件夹
const public = path.join(__dirname, 'public');
// app.use(express.static(public)); // 设置以public为根，查找指定资源

// 如果想要设置静态资源的前缀
// 例如： 原来是/images/userAvatar.jpg 变为=> /static/images/userAvatar.jpg
app.use('/static', express.static(public));

app.get('/', (req, res) => {
	res.send('hello express框架!');
});

app.get('/login', (req, res) => {
	let filePath = path.join(__dirname, 'views', 'login.html');
	let content = fs.readFileSync(filePath, 'utf-8');
	res.send(content);
});

// 4.监听是否有请求
app.listen(3000, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('express web server is listen in port 3000! ');
});
