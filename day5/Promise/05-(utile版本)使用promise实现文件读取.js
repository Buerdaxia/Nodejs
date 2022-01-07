const fs = require('fs');
const path = require('path');
const util = require('util');

let filePath1 = path.join(__dirname, 'files', 'my.txt');
let filePath2 = path.join(__dirname, 'files', 'love.txt');
let filePath3 = path.join(__dirname, 'files', 'nodejs.txt');
let filePath4 = path.join(__dirname, 'files', 'data.txt');
// 这样会返回一个promise实例
let readFilePromise = util.promisify(fs.readFile);

let writeFilePromise = util.promisify(fs.writeFile);
// function readFilePromise(filePath) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(filePath, 'utf-8', (err, data) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(data);
// 		});
// 	});
// }
// 分析，后面需要三个promise对象，那么我们封装的函数就返回promise对象
let p1 = readFilePromise(filePath1, 'utf-8');

let p2 = readFilePromise(filePath2, 'utf-8');

let p3 = readFilePromise(filePath3, 'utf-8');

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
		return writeFilePromise(filePath4, str1);
	})
	.then(() => {
		console.log('写入成功');
	})
	.catch(err => {
		console.log(err);
	});
