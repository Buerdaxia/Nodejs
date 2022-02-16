// await不能单独使用，必须和async连用

// await后面跟随的是一个promise对象，然后整个表达式返回的是promise成功的结果
// 失败的结果需要用try...catch捕获

async function foo() {
	const p = new Promise((resolve, reject) => {
		// resolve(123);
		reject(123);
	});
	let res;
	try {
		res = await p;
	} catch (error) {
		res = error;
	}
	// const res = await p;
	console.log(res);
}

foo();
