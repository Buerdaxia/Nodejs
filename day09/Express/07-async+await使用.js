const express = require('express');
// 1.引入orm
const db = require('./db/nodejs-orm/index');

const app = new express();

app.get('/get_data', (req, res) => {
	(async function () {
		// 创建model对象
		let Students = db.model('students');
		// 如果成功 result接受 data
		let result = await new Promise((resolve, reject) => {
			Students.find((err, data) => {
				if (err) reject(err);
				resolve(data);
			});
		});

		res.send(result);
	})();
});

app.listen(3000, () => {
	console.log('服务器以及启动, 端口为: 3000');
});
