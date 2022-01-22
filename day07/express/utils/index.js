function checkLogin(req, res, next) {
	console.log('执行passportRouter的路由接口函数之前先执行这行代码');

	// 可以在这里写一些验证操作
	if (true) {
		res.send('登录验证没有通过');
		return;
	}

	// 必须要写， 去执行app.use后对应的路由文件中请求去执行
	next();
}

// 其他函数到之后也直接写入对象即可
module.exports = {
	checkLogin
};
