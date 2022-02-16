const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
	console.log(ctx);
	// 1. ctx.request -> http请求
	// 2. ctx.response -> http响应
	if (ctx.request.url == '/%0A') {
		ctx.response.body = '这是主页';
	} else if (ctx.request.url == '/users%0A') {
		if (ctx.request.method == 'GET') {
			ctx.response.body = '这是用户页';
		} else if (ctx.request.method == 'POST') {
			ctx.response.body = '创建用户';
		} else {
			ctx.response.status = 405;
		}
	} else {
		ctx.response.status = 404;
	}
});

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
