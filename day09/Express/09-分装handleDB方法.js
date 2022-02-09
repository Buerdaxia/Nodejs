const express = require('express');
// 1.引入handleDB函数
const handleDB = require('./db/handleDB');

const app = new express();

app.get('/get_data', (req, res) => {
	(async function () {
		// 2.使用handleDB
		let result = await handleDB();
		res.send(result);
	})();
});

app.listen(3000, () => {
	console.log('服务器以及启动, 端口为: 3000');
});
