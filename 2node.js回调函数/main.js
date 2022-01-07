var fs = require('fs');

// 第一种阻塞代码
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// 第二种非阻塞代码
fs.readFile('input.txt', function (err, data) {
	if (err) return console.log(err);
	console.log(data.toString());
});

console.log('程序执行结束!');
