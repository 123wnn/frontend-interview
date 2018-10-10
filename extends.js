//继承的几种方式

function Animal(name,height){
    //属性
    this.name = name || 'Animal';
    this.heigth = height || 'Animal';
    //实例方法
    this.sleep = function(){
        console.log(this.name+'正在睡觉！'+this.heigth)
    }
  
}
Animal.prototype.eat = function(food){
    console.log(this.name+'正在吃：'+food)
}
Animal.prototype.name = 'jack'

/* 
* (1) 原型链继承：将父类的实例作为子类的原型
* 优点：
*/ 

function Fish(){

}
Fish.prototype = new Animal();
var fish = new Fish();
Fish.prototype.swim = function(){
    console.log('游泳')
}
var animal = new Animal();
console.log(Animal.prototype);
fish.eat('a');
fish.swim();
fish.sleep();
console.log(fish.name);



/* 
* (2) 构造继承：call或apply  使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
* 优点：
*/ 
function Cat(){
    //两种继承都可以
    console.log(this);
    Animal.apply(this,['name','height']) 
    // Animal.call(this,'name');
}


Cat.prototype = new Animal();   
Cat.prototype.miao = function(){
    console.log('喵喵')
}

Cat.prototype.name = 'cat'

var cat = new Cat();

cat.eat('a');
cat.miao();
cat.sleep();
console.log(cat.name);
// console.log(window.localStorage.setItem('data','1234'));
// console.log(window.localStorage.getItem('data'));
// console.log(window.localStorage.removeItem('data'));
// console.log(window.localStorage)

// console.log(window.sessionStorage.setItem('data','345'));
// console.log(window.sessionStorage.getItem('data'));
// console.log(window.sessionStorage.clear('data'));
// console.log(window.sessionStorage)

/* 
* (3) es6继承:
* 优点：子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，
       而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
*/ 
class Parent{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log(this);
    }
    eating(){

    }
}
class Children extends Parent{
    constructor(name){
        super(name)
        console.log(this);
    }
}
let child = new Children('child');
console.log(child.name);



/************************************/





