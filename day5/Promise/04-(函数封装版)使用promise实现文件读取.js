const fs = require('fs');
const path = require('path');

let filePath1 = path.join(__dirname, 'files', 'my.txt');
let filePath2 = path.join(__dirname, 'files', 'love.txt');
let filePath3 = path.join(__dirname, 'files', 'nodejs.txt');

function readFilePromise(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		});
	});
}
// 分析，后面需要三个promise对象，那么我们封装的函数就返回promise对象
let p1 = readFilePromise(filePath1);

let p2 = readFilePromise(filePath2);

let p3 = readFilePromise(filePath3);

// 创建一个变量保存字符串
let str1 = '';

p1.then(data => {
	str1 += data;
	return p2;
})
	.then(data => {
		str1 += data;
		return p3;
	})
	.then(data => {
		str1 += data;
		console.log(str1);
	})
	.catch(err => {
		console.log(err);
	});
