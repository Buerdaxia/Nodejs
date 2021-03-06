const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/register', (req, res) => {
	let filePath = path.join(__dirname, '../views', 'register.html');

	// 读取文件内容
	let content = fs.readFileSync(filePath, 'utf-8');

	// 访问/register时返回注册页面
	res.send(content);
});

router.post('/register', (req, res) => {
	// 一般post提交过来，需要获取到请求参数

	// 2.获取参数 通过req.body获取参数是一个对象
	console.log(req.body);

	// 结构一下，并打印
	let { username, email, password, repwd } = req.body;
	console.log(username);
	console.log(email);
	console.log(password);
	console.log(repwd);

	// 准备重定向 点击注册按钮跳到login页面
	// res.send('post');
	res.redirect('/login');
});

// 展示登录页面
router.get('/login', (req, res) => {
	let filePath = path.join(__dirname, '../views', 'login.html');

	// 读取文件内容
	let content = fs.readFileSync(filePath, 'utf-8');

	// 访问/register时返回注册页面
	res.send(content);
});

// commonjs导出规范
module.exports = router;
