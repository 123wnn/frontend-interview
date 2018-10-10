



let fn = ()=>{
    console.log(this);
}
 fn();

function fn1(){
    fna2 = 12345;
    let fna = 1234;
    console.log(this);
}
new fn1();
console.log(fna2);

var la = []
for (var i = 0; i < i; i++) {
    la[i] = function () {
        console.log(i)
    }
}
// la[5]() // 10
console.log([...new Set([1,2,3,4,5,4])])

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]
  );

console.log(map);

class Animals {
    constructor () {
        this.type = 'animal'
    }
    says(say) {
        console.log(this.type + 'says' + say)
    }
}
 let animals = new Animals()
 animals.says('hello') // animal says hello

 class Cats extends Animals {
     constructor() {
         super()
         this.type = 'cat';
         console.log(this);


     }
 }
 let cats = new Cats()
 cats.says('hello') // cat says hello


/* 操作符 ...
* (1)rest参数 rest参数之后不能再有其他参数（只能是最后一个参数）否则会报错。 
* (2)将数组转为一个参数序列   扩展运算符则可以看作是rest参数的逆运算。可以将数组转化为参数列表。代替apply方法
* (3)与解构赋值结合 
* (4)复制数组
*/  
//(1)
function fm(a,b,...values){
    console.log(values);
}
fm(1,2,3,4) //[3.4]

//es6之前的用法
function foo(){
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
}
foo(1, 2, 3);// [1, 2, 3]

// (2)
console.log(1,...[2,3,4,5])     //1,2,3,4,5
Math.max.apply(null,[14,3,7])   //ES5写法
Math.max(...[14,3,7]) //ES6写法

// (3)
let [first,...rest]=[1,2,3,4,5];
console.log(first) //1
console.log(rest)  //[2,3,4,5]

// (4) 
// ** a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。
const a1 = [1,2];
const a22 = a1;
a22[0] = 2;
a1  //[2,2]

// ** a1会返回原数组的克隆，再修改a2就不会对a1产生影响
const a33 = [1, 2];
const a4 = a33.concat();
a4[0] = 2;
a33 // [1, 2]

// **扩展运算符提供了复制数组的简便写法
const a5 = [1, 2];
// 写法一
const a6 = [...a5];
// 写法二
const [...a7] = a5;

a6[0]='xiha';
console.log(a5,a6);

//  ** es5数组新增方法 map,filter 
var date = [1,2,3,4].map((value,index,array)=>{
    return {'value':value}
})
console.log(date);

var dates = [1,2,3,4].filter((value,index,array)=> value%2 == 0)
console.log(dates);

// ***this指向问题
var flag = 'global';
var objs = {
    flag: 'object',
    method: function(){
        console.log(this.flag);
        setTimeout(function(){
            console.log(this.flag);
        }, 200)
    }
};
objs.method();//object global

//es3
var flag = 'global';
var obj = {
    flag: 'object',
    method: function(){
        var self = this;
        setTimeout(function(){
            console.log(self.flag);
        }, 200)
    }
};
obj.method(); //object

//ES5
var flag = 'global';
var obj = {
    flag: 'object',
    method: function(){
        setTimeout(function(){
            console.log(this.flag);
        }.bind(this), 200)
    }
};
obj.method(); //object

//es6
var flag = 'global';
var obj = {
    flag: 'object',
    method: function(){
        setTimeout(()=>console.log(this.flag), 200);
    }
};
obj.method(); //object

console.log(Array.isArray([1,2]));

var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs.forEach(function(func) {
    func()
})
