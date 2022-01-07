const fs = require('fs');
const path = require('path');
const util = require('util');

let filePath1 = path.join(__dirname, 'files', 'my.txt');
let filePath2 = path.join(__dirname, 'files', 'love.txt');
let filePath3 = path.join(__dirname, 'files', 'nodejs.txt');
let filePath4 = path.join(__dirname, 'files', 'data.txt');

let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);

let p1 = readFilePromise(filePath1, 'utf-8');
let p2 = readFilePromise(filePath2, 'utf-8');
let p3 = readFilePromise(filePath3, 'utf-8');
/* Promise.all([Promise对象1, Promise对象2, Promise对象3...])
   .then(data=> {
     data各个Promise对象成功的返回值所组成的数组
   })
*/

// p1.then(data => {
// 	console.log('成功了', data);
// }).catch(err => {
// 	console.log(err);
// });
let str = '';
Promise.all([p1, p2, p3])
	.then(data => {
		console.log(data); // ['我']
		str = data.join('');
		writeFilePromise(filePath4, str); //写入到filePath4中
		console.log(str); // 我爱node.js
	})
	.catch(err => {
		// 从p1,p2,p3中捕获第一个变为rejected的对象
		console.log(err);
	});
