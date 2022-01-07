// 引入fs模块
const fs = require('fs');
// 引入path模块
const path = require('path');
let filePath = path.join(__dirname, 'hello.txt');
// 同步读取
// fs.readFileS(文件路径,'转换编码', fallback)
const content = fs.readFile(filePath, 'utf-8', (err, data) => {
	//err 是错误信息，如果没有发生错误就是null
	if (err) {
		console.log(err);
		return;
	}
	console.log(data);
});
// end---会先输出
console.log('end-------');
