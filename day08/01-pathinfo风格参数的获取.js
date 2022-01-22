// pathinfo参数，pathname参数
const express = require('express');
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

app.get('/list', (req, res) => {
	res.render('list');
});

// 在路径后写入/:id表示id是动态参数
app.get('/detail/:id/:type', (req, res) => {
	console.log(req.params);
	console.log(req.params.id);
	console.log(req.params.type);
	res.send('detail详情页');
});

app.listen(3001, () => {
	console.log('服务器已经启动在3001端口');
});
