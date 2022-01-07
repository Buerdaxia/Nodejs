console.log(__dirname);
console.log(__filename);

// 引入path模块
const path = require('path');

// 获取文件的扩展名，就是后缀名
let extname = path.extname(__filename);

console.log(extname);

// 获取一个对象，对象包含文件的相关信息(文件名，路径，后缀名等..)
let parseObj = path.parse(__filename);
console.log(parseObj);

// 拿到m1文件的完整路径了
let m1Path = path.join(__dirname, 'module', 'm1.js');
console.log('m1Path:', m1Path);
