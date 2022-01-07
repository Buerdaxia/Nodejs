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

class Cat extends Animal {}

let cat = new Cat('汤姆');
console.log(cat.name);
// 直接得到父类的方法
cat.showName();

// 调用静态方法 通过类名调用静态方法
Cat.eat();
