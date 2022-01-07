// 1.node中没有window对象，有的是global对象

// 报错
// console.log(window);

console.log(global);

// 2. nodejs中声明的变量，不会挂在到global中
var a = 30;
console.log(global.a);

// 3.可以想global添加成员，可以在任何地方去使用
global.a = 60;
console.log(a);

// 4.this指向谁？this指向向外暴露模块对象
console.log(this);
console.log(this == global);
