// 一、导入Koa
const Koa = require('koa');
// 二、实例化对象
const app = new Koa();
// 三、编写中间件
app.use((ctx, next) => {
	ctx.message = 'aa';
	// ctx.body = ctx.message;
	next();
	ctx.body = ctx.message;
});

app.use((ctx, next) => {
	ctx.message += 'bb';
	next();
});

app.use(ctx => {
	ctx.message += 'cc';
});

// 四、启动服务

app.listen(4000, () => {
	console.log('server is running on http://localhost:4000');
});
