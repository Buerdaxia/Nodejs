// 1.引入
const express = require('express');
const path = require('path');

// 2.创建项目对象
const app = new express();
// 引入express-art-template,使用对应的引擎
// view engine setup
app.engine('html', require('express-art-template'));

// 生产环境（线上）production
// 开发环境 development
app.set('view options', {
	debug: process.env.NODE_ENV !== 'production'
});
// 设置在哪一个目录下查找HTML文件
app.set('views', path.join(__dirname, 'views'));

// 设置模板后缀名为html
app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(3000, err => {
	if (err) {
		console.log(err);
		return;
	}
	// 这里的代码会在服务器启动时执行
	console.log('express web server is listen in port 3000! ');
});
