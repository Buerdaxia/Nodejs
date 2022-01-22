// 1.引入
const express = require('express');
const path = require('path');

// 2.创建项目对象
const app = new express();
// 引入express-art-template,使用对应的引擎
// view engine setup
// html表示我们使用的html
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

// 访问根目录时直接渲染index.html
app.get('/', (req, res) => {
	// 我们可以再接口中查询数据库，得到数据后传递给模板，展示在页面上
	let data = {
		num1: 31,
		num2: 30,
		user: {
			name: '钱不二',
			age: 18
		},
		books: ['三国演义', '水浒传', '红楼梦', '西游记']
	};

	// 这样可以将data传递到index中
	res.render('index', data);
});

app.listen(3000, err => {
	if (err) {
		console.log(err);
		return;
	}
	// 这里的代码会在服务器启动时执行
	console.log('express web server is listen in port 3000! ');
});
