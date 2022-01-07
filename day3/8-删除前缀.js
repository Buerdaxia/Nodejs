/*
  需求：把当前目录下所有js文件都添加一个前缀[day03]
*/
const fs = require('fs');

// 获取当前文件夹下所有文件名数组
let nameList = fs.readdirSync(__dirname);
// console.log(nameList);

// 修改文件名
// fs.renameSync('旧文件名', '新文件名');

nameList.forEach(item => {
	if (item.endsWith('.js')) {
		fs.renameSync(item, item.substring(6));
	}
});
