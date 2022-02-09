const express = require('express');
// 1.引入db.js文件中的db
const db = require('./db/db.js');

const app = new express();

app.get('/get_data', (req, res) => {
	// 2.使用db暴露出来的query函数
	/*
    err: 报错信息
    data: 查询出来的数据
  */
	db.query('select * from students where gender = 1', (err, data) => {
		if (err) {
			console.log(err);
			res.send('数据库查询出错');
			return;
		}
		console.log(data);
		// 3.对data进行处理
		res.send(data);
	});
	// res.send('hello word');
});

app.listen(4000, () => {
	console.log('服务器以及启动, 端口为: 4000');
});
