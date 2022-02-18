// 一,导入Koa包
const Koa = require('koa');
// 二,实例化app对象
const app = new Koa();

// 三,导入自己编写好的router路由
const router = require('./router/user.route');
// 四,使用中间件
// 引入和注册koa-body
const koaBody = require('koa-body');
app.use(koaBody());

// 引入和注册koa-json-error
const error = require('koa-json-error');
// 这里将两个函数抽离走了
const { formatError, postFormatError } = require('./err/index');
app.use(
	error({
		format: formatError,
		postFormat: postFormatError
	})
);
// 简写
app.use(router.routes()).use(router.allowedMethods());

// 注册和使用koa-json-error

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
