let buf1 = Buffer.from([97, 98, 99]);
console.log(buf1); // <Buffer 61 62 63>是一个16进制的数据
console.log(buf1.toString()); // abc

let buf2 = Buffer.from('node.js');
console.log(buf2); //<Buffer 6e 6f 64 65 2e 6a 73>
console.log(buf2.toString()); //node.js
