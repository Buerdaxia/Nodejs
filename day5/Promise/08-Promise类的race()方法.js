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

// race()方法格式
/* Promise.race([Promise对象1, Promise对象2, Promise对象3...])
   .then(data=> {
      上面Promise对象第一个执行完毕的会返回，这里代码就会执行一次
      并且只执行一次
   })
*/

let str = '';
Promise.race([p1, p2, p3])
	.then(data => {
		// p1,p2,p3谁先resolve了data就是谁
		// 并且只执行一次
		console.log(data); // 我
	})
	.catch(err => {
		console.log(err);
	});
