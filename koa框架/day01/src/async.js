// async await 是关键字
//
async function foo() {
	return 123;
}
const res = foo();
console.log(res);
res.then(data => {
	console.log(data);
});
