const express = require('express');
const path = require('path');
const fs = require('fs');

const app = new express();

app.get('/register', (req, res) => {
	let filePath = path.join(__dirname, 'views', 'register.html');

	// 读取文件内容
	let content = fs.readFileSync(filePath, 'utf-8');

	// 访问/register时返回注册页面
	res.send(content);
});

app.post('/register', (req, res) => {
	res.send('post');
});

app.listen(3000, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('express web server is listen in port 3000! ');
});
