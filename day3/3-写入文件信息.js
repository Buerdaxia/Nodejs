const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

// fs.writeFile(文件路径, 写入内容, '编码', fallback回调)
fs.writeFile(filePath, 'hello write', 'utf-8', err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('写入成功');
});
