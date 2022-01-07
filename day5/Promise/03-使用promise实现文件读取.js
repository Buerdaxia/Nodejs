const fs = require('fs');
const path = require('path');

let filePath1 = path.join(__dirname, 'files', 'my.txt');
let filePath2 = path.join(__dirname, 'files', 'love.txt');
let filePath3 = path.join(__dirname, 'files', 'nodejs.txt');

let p1 = new Promise((resolve, reject) => {
	fs.readFile(filePath1, 'utf-8', (err, data) => {
		if (err) {
			reject(err);
		}
		resolve(data);
	});
});

let p2 = new Promise((resolve, reject) => {
	fs.readFile(filePath2, 'utf-8', (err, data) => {
		if (err) {
			reject(err);
		}
		resolve(data);
	});
});

let p3 = new Promise((resolve, reject) => {
	fs.readFile(filePath3, 'utf-8', (err, data) => {
		if (err) {
			reject(err);
		}
		resolve(data);
	});
});

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
