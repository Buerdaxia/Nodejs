// pathinfo参数，pathname参数
const express = require('express');
// 1. 引入art-template
const template = require('art-template');
const path = require('path');
const app = express();

app.engine('html', require('express-art-template'));

// 生产环境（线上）production
// 开发环境 development
app.set('view options', {
	debug: process.env.NODE_ENV !== 'production'
});
// 设置在哪一个目录下查找HTML文件，设置模板存放目录
app.set('views', path.join(__dirname, 'views'));

// 设置模板后缀名为html
app.set('view engine', 'html');

// 2.书写过滤器函数
template.defaults.imports.timestamp = function (value) {
	// value参数接受 |号前面的那个参数
	return value * 10; // 返回处理过后的参数
};

// 3.在模板中使用过滤器

app.get('/', (req, res) => {
	let data = {
		num1: 1,
		num2: 2
	};
	res.render('index', data);
});

app.listen(3001, () => {
	console.log('服务器已经启动在3001端口');
});
