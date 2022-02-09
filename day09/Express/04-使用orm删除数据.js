const express = require('express');
// 1.引入orm
const db = require('./db/nodejs-orm/index');

const app = new express();

app.get('/get_data', (req, res) => {
	// 创建model对象
	let Students = db.model('students');
	Students.delete('id=21', (err, data) => {
		console.log(data);
	});
	res.send('删除成功');
});

app.listen(3000, () => {
	console.log('服务器以及启动, 端口为: 3000');
});
