const express = require('express');
// 1.引入cookie-session
const cookieSession = require('cookie-session');
const app = express();

// 2.注册session并传入参数
app.use(
	/*
    name：session名
    keys: 为内部加密所需要的keys，随机字符串
    maxAge: 过期时间，单位是毫秒
  */
	cookieSession({
		name: 'my_session',
		keys: ['abccba'],
		maxAge: 1000 * 60 * 60 * 2
	})
);

app.get('/', (req, res) => {
	res.send('express框架啊');
});

app.get('/set_session', (req, res) => {
	// 3.设置session信息
	req.session['name'] = 'nodejs_session';
	req.session['age'] = 12;
	res.send('设置了session数据');
});

app.get('/get_session', (req, res) => {
	// 4.获取请求中的session值
	let name = req.session['name'];
	let age = req.session['age'];
	res.send(`获取到的session数据为: ${name}, ${age}`);
});

app.listen(3000, () => {
	console.log('Express服务器已经在3000端口运行');
});
