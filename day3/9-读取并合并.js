const fs = require('fs');
const path = require('path');

const myPath = path.join(__dirname, 'my.txt');
const lovePath = path.join(__dirname, 'love.txt');
const nodejsPath = path.join(__dirname, 'nodejs.txt');
const dataPath = path.join(__dirname, 'data.txt');

fs.readFile(myPath, 'utf-8', (err1, data1) => {
	if (err1) {
		console.log(err1);
		return;
	}
	fs.readFile(lovePath, 'utf-8', (err2, data2) => {
		if (err2) {
			console.log(err2);
			return;
		}
		fs.readFile(nodejsPath, 'utf-8', (err3, data3) => {
			if (err3) {
				console.log(err3);
				return;
			}
			// 把三个文件都读取出来之后，写入data.txt
			console.log(data1 + data2 + data3);
			fs.writeFile(dataPath, data1 + data2 + data3, 'utf-8', err => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('写入成功');
			});
		});
	});
});
