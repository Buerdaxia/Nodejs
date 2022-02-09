const express = require('express');
// 1.引入orm
const db = require('./db/nodejs-orm/index');

const app = new express();

app.get('/get_data', (req, res) => {
	// 创建model对象
	let Students = db.model('students');
	// 全部字段修改
	// Students.update({ age: 30 }, (err, result) => {
	// 	console.log(result);
	// });

	/* 
    第一个参数：字符串，修改条件
    第二个参数：对象，修改字段和值
    第三个参数：回调
  */
	Students.update('id=1', { age: 18 }, (err, result) => {
		console.log(result);
	});
	res.send('修改成功');
});

app.listen(3000, () => {
	console.log('服务器以及启动, 端口为: 3000');
});
