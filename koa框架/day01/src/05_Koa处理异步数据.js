// 一、导入Koa
const Koa = require('koa');
// 二、实例化对象
const app = new Koa();
// 三、编写中间件
app.use(async (ctx, next) => {
	ctx.message = 'aa';
	// ctx.body = ctx.message;
	await next();
	ctx.body = ctx.message;
});

app.use(async (ctx, next) => {
	ctx.message += 'bb';
	await next();
});

app.use(async ctx => {
	const res = await Promise.resolve('cc');
	ctx.message += res;
});

// 四、启动服务

app.listen(4000, () => {
	console.log('server is running on http://localhost:4000');
});
