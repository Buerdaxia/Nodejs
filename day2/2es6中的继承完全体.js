class Animal {
	constructor(name) {
		this.name = name;
	}
	showName() {
		console.log(`My name is ${this.name}`);
	}

	static eat() {
		console.log('吃-------');
	}
}

class Cat extends Animal {
	constructor(age) {
		// 通过super调用回父类的constructor方法
		// super(name);
		this.age = age;
	}
	// 这个是cat自己的方法
	catchMouse() {
		console.log('抓老鼠');
	}

	showName() {
		//和父类方法一直则重写父类的方法，调用以子类的为准
		console.log(`我是一直猫,My name is ${this.name}`);
	}
}

let cat = new Cat(10);
// console.log(cat.name);
console.log(cat.age);
// 直接得到父类的方法
cat.showName();
cat.catchMouse();
