// 引入fs模块
const fs = require('fs');
// 引入path模块
const path = require('path');
let filePath = path.join(__dirname, 'hello.txt');
// 同步读取
// fs.readFileSync(文件路径)
const content = fs.readFileSync(filePath, 'utf-8');
console.log(content);

console.log('end-------');
