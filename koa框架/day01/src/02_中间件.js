// 1.引入koa包
const Koa = require('koa');

// 2.实例化app对象
const app = new Koa();

// 3.编写中间件
/*  app.use使用中间件，注意：只能接受一个函数
    ctx：http请求上下文
    next：调用交给下一个中间件
 */
app
	.use((ctx, next) => {
		console.log('我来组成头部');
		next();
	})

	.use((ctx, next) => {
		console.log('我来组成身体');
		next();
	})

	.use(ctx => {
		console.log('我来组成尾部');
		ctx.body = '组装完成';
	});

// 4.启动服务
app.listen(3000, () => {
	console.log('server is running on http://loaclhost:3000');
});
