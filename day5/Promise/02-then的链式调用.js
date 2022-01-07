const fs = require('fs');
const path = require('path');

let filePath1 = path.join(__dirname, 'files', 'my.txt');
// 原始回调方式
// fs.readFile(filePath1, 'utf-8', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}

// 	console.log(data);
// });

let p1 = new Promise((resolve, reject) => {
	fs.readFile(filePath1, 'utf-8', (err, data) => {
		if (err) {
			reject(err);
		}
		resolve(data);
	});
});

p1.then(
	data => {
		console.log('成功了', data);
		return p1;
		// 如果返回一个promise对象，会将成功的结果值
		// 或者失败的结果值进行返回，作为下一个then回调的参数
	},
	err => {
		console.log('失败了', err);
	}
).then(value => {
	console.log('第二个then', value);
	// 这个value是p1成功的结果值data
});
