const fs = require('fs');
const path = require('path');

let filePath1 = path.join(__dirname, 'files', 'my.txt');

let p1 = new Promise((resolve, reject) => {
	fs.readFile(filePath1, 'utf-8', (err, data) => {
		if (err) {
			reject(err);
		}
		resolve(data);
	});
});

p1.then(data => {
	console.log('成功了', data);
})
	.catch(err => {
		console.log(err);
	})
	.finally(() => {
		console.log('最终无论如何都会执行finally方法。');
	});
