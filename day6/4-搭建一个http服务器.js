const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8081;

// 将响应代码封装一下
function responseEnd(response, dirName, fileName) {
	// 先用path模块获取文件路径
	let filePath = path.join(__dirname, 'assets', dirName, fileName);
	// 再用fs模块读取页面内容，
	let content = fs.readFileSync(filePath);
	response.end(content);
}

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
		responseEnd(response, 'html', 'detail.html');
	} else if (reqUrl.endsWith('.css')) {
		responseEnd(response, 'css', 'index.css');
	} else if (reqUrl.endsWith('.js')) {
		responseEnd(response, 'js', 'index.js');
	} else if (reqUrl == '/getData') {
		response.end('接收到AJAX的GET请求，这是想要数据');
	} else if (reqUrl == '/login.html') {
		responseEnd(response, 'html', 'login.html');
	}
});
// 监听一个端口
server.listen(port, error => {
	console.log('webServer is listening at port 8081!');
});
