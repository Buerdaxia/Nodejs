const express = require('express');
// 1.引入orm
const db = require('./db/nodejs-orm/index');

const app = new express();

app.get('/get_data', (req, res) => {
	// 创建model对象
	let Students = db.model('students');

	// 单条插入
	// Students.insert({ name: '赵云', age: 20 }, (err, data) => {
	// 	res.send(data);
	// });

	// 多条数据插入
	Students.insert(
		[
			{ name: '钱不二', age: 22 },
			{ name: '刘备', age: 33 },
			{ name: '关羽', age: 34 }
		],
		(err, data) => {
			console.log(data);
		}
	);
	res.send('添加成功');
});

app.listen(3000, () => {
	console.log('服务器以及启动, 端口为: 3000');
});
