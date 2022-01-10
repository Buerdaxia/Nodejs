const express = require('express');

const app = new express();

app.get('/index', (req, res) => {
	// 浏览器路径 http://localhost:3000/index?username=xxx&password=111

	/* req.query可以获得url后面路径跟随的参数，
     并且会将参数整合成一个对象
  */
	console.log(req.query);
	// 分别获取对象的数据
	console.log(req.query.username, req.query.password);

	res.send('index');
});

app.listen(3000, err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('express web server is listen in port 3000! ');
});
