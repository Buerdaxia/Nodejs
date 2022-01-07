async function func() {
	let data1 = await 123;
	/*data1相当于，new Promise((resolve,reject) => {
    resolve(123);
  })
  */
	console.log('data1: ', data1);
	return data1;
}

let ret = func();
console.log('ret:', ret);
