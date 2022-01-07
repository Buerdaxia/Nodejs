const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8081;

const server = http.createServer((request, response) => {
	// 设置响应头解决乱码问题
	response.setHeader('Content-type', 'text/html;charset=utf-8');

	let reqUrl = request.url;
	if (reqUrl === '/' || reqUrl === '/index.html') {
		// 先用path模块获取文件路径
		let filePath = path.join(__dirname, 'assets', 'html', 'index.html');
		// 再用fs模块读取页面内容，
		let content = fs.readFileSync(filePath);
		response.end(content);
	} else if (reqUrl === '/detail.html') {
		// 先用path模块获取文件路径
		let filePath = path.join(__dirname, 'assets', 'html', 'detail.html');
		// 再用fs模块读取页面内容，
		let content = fs.readFileSync(filePath);
		response.end(content);
	} else if (reqUrl.endsWith('.css')) {
		// 先用path模块获取文件路径
		let filePath = path.join(__dirname, 'assets', 'css', 'index.css');
		// 再用fs模块读取页面内容，
		let content = fs.readFileSync(filePath);
		response.end(content);
	} else {
		response.end('404错误,该资源寻找不到');
	}
});
// 监听一个端口
server.listen(port, error => {
	console.log('webServer is listening at port 8081!');
});
