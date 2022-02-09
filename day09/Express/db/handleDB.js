function handleDB() {
	console.log('handleDB');
	// 创建model对象
	let Students = db.model('students');
	let result;
	// 如果成功 result接受 data
	try {
		result = await new Promise((resolve, reject) => {
			Students.find((err, data) => {
				if (err) reject(err);
				resolve(data);
			});
		});
	} catch (error) {
		res.send({ errMsg: '数据库查询出错' });
		return;
	}
}

module.exports = {
	handleDB
};
