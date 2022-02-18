// 三,使用koa-router
// 3.1引入路由包
const Router = require('koa-router');
// 3.2实例化路由对象
const router = new Router({ prefix: '/users' });
/*
  prefix: 简写以下的url,下面的/users都可以简写为/
*/

const db = [
	{ id: 1, name: 'xiaoming', age: 10 },
	{ id: 2, name: 'xiaohong', age: 11 },
	{ id: 3, name: 'xiaogang', age: 12 }
];
// 3.3编写路由文件
router.get('/', ctx => {
	// 通过ctx.query 解析键值对参数
	// 解析键值对参数
	const { start = 0, end = 0 } = ctx.query;
	if (start > end) ctx.throw(422);
	const res = db.filter(item => {
		return item.age >= start && item.age < end;
	});

	// 如果res是空数组
	res.length == 0 ? ctx.throw(404) : (ctx.body = res);
});

// GET /users/:id ----根据id获取单个用户信息
router.get('/:id', ctx => {
	// 解析id参数
	const id = ctx.params.id;
	const res = db.filter(item => {
		return item.id == id;
	});
	if (!res[0]) {
		// 抛出404错误
		ctx.throw(404);
	}
	ctx.body = res[0];
});

// POST /users 传递数据{id: 4...}
router.post('/', ctx => {
	console.log(ctx.request.body);
	// 将传递过来的数据push到db中(这里一般都是操作数据库的)
	db.push(ctx.request.body);
	console.log(db);
	ctx.body = '创建用户';
});

// 接口:获取id=1的用户编写的article=1
router.get('/:id/article/:aid', ctx => {
	console.log(ctx.params);
	// 如果没有通过ctx.body返回数据时,默认koa返回404
	// blur.s;
	if (false) {
		ctx.body = { id: 1, title: '文章1', content: '我是文章1' };
	} else {
		ctx.throw(422, '参数格式不正确');
	}
});

// 将router暴露出去
module.exports = router;
