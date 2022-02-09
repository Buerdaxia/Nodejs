const express = require('express');
// 1.引入orm
const db = require('./db/nodejs-orm/index');

const app = new express();

app.get('/get_data', (req, res) => {
	// 创建model对象
	let Students = db.model('students');

	Students.sql('select * from students where id >= 10', (err, data) => {
		res.send(data);
	});
});

app.listen(3000, () => {
	console.log('服务器以及启动, 端口为: 3000');
});
