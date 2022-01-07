const fs = require('fs');
const path = require('path');
const util = require('util');

let filePath1 = path.join(__dirname, 'files', 'my.txt');
let filePath2 = path.join(__dirname, 'files', 'love.txt');
let filePath3 = path.join(__dirname, 'files', 'nodejs.txt');
let filePath4 = path.join(__dirname, 'files', 'data.txt');

let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);
// 1.await后面跟着一个Promise对象
// 2.await必须放在async函数内部
async function func() {
	let data1 = await readFilePromise(filePath1);

	let data2 = await readFilePromise(filePath2);

	let data3 = await readFilePromise(filePath3);

	console.log(data1 + data2 + data3);
	// 写入
	writeFilePromise(filePath4, data1 + data2 + data3);
}

func();
