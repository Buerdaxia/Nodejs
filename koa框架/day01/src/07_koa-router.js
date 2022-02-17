// 一,导入Koa包
const Koa = require('koa');
// 二,实例化app对象
const app = new Koa();

// 三,导入自己编写好的router路由
const router = require('./router/user.route');
// 引入koa-body
const koaBody = require('koa-body');
// 注册koa-body
app.use(koaBody());
// 四,使用中间件,简写
app.use(router.routes()).use(router.allowedMethods());
// 让koa-router支持报405和501错误
// app.use(router.allowedMethods());
// 原版自带的路由
// app.use(ctx => {
// 	console.log(ctx);
// 	// 1. ctx.request -> http请求
// 	// 2. ctx.response -> http响应
// 	if (ctx.request.url == '/') {
// 		ctx.response.body = '这是主页';
// 	} else if (ctx.request.url == '/users') {
// 		if (ctx.request.method == 'GET') {
// 			ctx.response.body = '这是用户页';
// 		} else if (ctx.request.method == 'POST') {
// 			ctx.response.body = '创建用户';
// 		} else {
// 			ctx.response.status = 405;
// 		}
// 	} else {
// 		ctx.response.status = 404;
// 	}
// });

app.on('error', (err, ctx) => {
	console.error(err);
	// 返回错误对象
	ctx.body = err;
});

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
