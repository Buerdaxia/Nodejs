const express = require('express');
// 1.引入orm
const db = require('./db/nodejs-orm/index');

const app = new express();

app.get('/get_data', (req, res) => {
	// 2.创建模型,填入查询那一张表

	let Students = db.model('students');
	//  <1>查询全部结果
	// Students.find((err, data) => {
	// 	res.send(data);
	// });
	// 3.使用find方法
	/*
    参数一：数组，里面填写要查询的字段
    参数二：回调函数，查询的数据和出错信息
  */
	// <2> 指定字段名查询
	// Students.find(['name', 'age'], (err, data) => {
	// 	res.send(data);
	// });
	// res.send('orm的使用');

	// <3> 条件查询
	// Students.find('age > 18', (err, data) => {
	// 	res.send(data);
	// });

	// <4> 分页查询
	/*
	参数一：为对象
	where: 查询条件，可选项
	number: 第几页
	page: 每页条数
*/
	// Students.limit({ where: 'age > 18', number: 2, count: 2 }, (err, data) => {
	// 	res.send(data);
	// });

	Students.find({ where: 'age> 18', arr: ['name', 'age'] }, (err, data) => {
		res.send(data);
	});
});

app.listen(3000, () => {
	console.log('服务器以及启动, 端口为: 3000');
});
