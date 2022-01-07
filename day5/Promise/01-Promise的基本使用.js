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
	},
	err => {
		console.log('失败了', err);
	}
);
