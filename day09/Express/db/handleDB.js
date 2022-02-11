const db = require('./nodejs-orm/index');
async function handleDB(res, errMsg, tableName, methodName, ...rest) {
	console.log('handleDB', rest);
	// 创建model对象
	let Model = db.model(tableName); // 1
	let result;
	// 如果成功 result接受 data
	try {
		result = await new Promise((resolve, reject) => {
			// 应为rest是一个数组，然后我们展开
			Model[methodName](...rest, (err, data) => {
				if (err) reject(err);
				resolve(data);
			});
		});
	} catch (error) {
		res.send({ errMsg: errMsg });
		return;
	}
	return result;
}

module.exports = {
	handleDB
};
