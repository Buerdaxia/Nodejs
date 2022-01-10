const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8081;

let uname = '钱不二';
let pwd = '123456';

// 将响应代码封装一下
function responseEnd(response, dirName, fileName) {
	// 先用path模块获取文件路径
	let filePath = path.join(__dirname, 'assets', dirName, fileName);
	// 再用fs模块读取文件内容，
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
	} else if (reqUrl == '/login_post') {
		// 处理post请求
		// 事件，一旦POST请求过来就会触发这个事件
		request.on('data', postData => {
			console.log(postData.toString());
			// 把JSON格式字符串转回来
			console.log(JSON.parse(postData.toString()));

			let { username, password } = JSON.parse(postData.toString());
			if (username == uname && password == pwd) {
				response.end('登录成功');
			} else {
				response.end('用户名或者密码错误');
			}
		});
	} else {
		response.end('404资源找不到');
	}
});
// 监听一个端口
server.listen(port, error => {
	console.log('webServer is listening at port 8081!');
});
