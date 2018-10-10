



var name = 'global scope';
function f(a) {
    var name = 'local scope';
    console.log(this);
    return function g() {
        return name;
    }
}

function Foo() {
    getName = function () { }
    return this;
}
Foo.getName = function () { }
Foo.prototype.getName = function () { }
var getName = function () { } //函数表达式
function getName() { }  //函数声明
/* 写出输出 */
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

// ******************************************************
// 闭包面试题  http://hao.jser.com/archive/5308/
// 闭包面试题  http://web.jobbole.com/85122/
// bind call apply ： http://web.jobbole.com/83642/
var name = 'global';
var obj = {
    name: 'obj',
    dose:  function() {
        this.name = 'dose';
        console.log(this); //dose
        return function ddd() {
            console.log(this.name);//global
            return this.name;
        }
    }
}
// console.log(obj.dose());
// console.log(obj.dose()()) //global
// console.log(obj.dose().call(this)) //global
var obj111=obj.dose;
console.log(obj111());

function ddd() {
    return this.name;
}

var obj = {
    name: 'obj',
    dose: function () {
        this.name = 'dose';
        console.log(this);
        return function ddd() {
            console.log(this);
            return this.name;
        }.bind(this)
    }
}
console.log(obj.dose().call(this))

var name = 'global';

var obj3 = {
    name: 'obj',
    dose: function () {
        var that = this;
        this.name = 'dose';
        return function () {
            return that.name;
        }
    }
}

obj3.dose().call(this)
/*
* (1)obj.dose().call(this)这个表达式拆解 
            var aaa = obj.dose()
            a.call(this)
*   这样就清晰多了。这样一眼就看出是在考察call的用法和this的指向。稍有点基础的，一眼就可以看出此处的this就是window对象。
* (2)由于function中用了bind，所以相当于固定了this，外边再call什么进来，也只是障眼法一样，由于函数内部绑定了this，所以此处情况要另外分析了
* (3)只不过是邦定this的手法不一样而已。与其说是考察闭包，不如说是考察对基础知识的理解，因为bind,call,apply之类的方法都是平时使用频率很高的，对它们多花点时间琢磨一下，必然是有好处的。
* (4)闭包的好处
*   延长作用域链
*   
*/


/*
* apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
* apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
* apply 、 call 、bind 三者都可以利用后续参数传参；
* bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。
*/
var obj = {
    x: 81,
};

var foo = {
    getX: function () {
        return this.x;
    }
}

console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81
console.log(Math.min([1, 2, 3]));
var array1 = [1, 3, 2];

console.log(Math.min(...array1));


function aa() {
    let args = Array.prototype.slice.call(arguments)

    var fn = function () {
        var arg_fn = Array.prototype.slice.call(arguments)
        return aa.apply(null, args.concat(arg_fn))
    }

    fn.valueOf = function () {
        return args.reduce(function (a, b) {
            return a + b
        })
    }

    return fn
}
console.log(aa(1)(2)(3)(4)(5)());

// split
function parseQueryString(url) {
    var obj = {};
    var a = url.split('?');
    if (a.length === 1) return obj;
    var b = a[1].split('&');
    for (var i = 0, length = b.length; i < length; i++) {
        var c = b[i].split('=');
        obj[c[0]] = c[1];
    }
    return obj;
}
var url = 'http://witmax.cn/index.php?key0=0&key1=1&key2=2';
var obj = parseQueryString(url);
console.log(obj.key0, obj.key1, obj.key2);  // 0 1 2 

var lis = document.links;
console.log(lis);
for (var i = 0; i < lis.length; i++) {
    (function (i) {
        lis[i].onclick = function () {
            console.log(i);
        };
    })(i);
}

var lists = document.getElementsByClassName('a');
console.log(lists);
for(var i = 0; i < lists.length; i++) {
  lists[i].index = i;
  console.log(lists[i]);
  console.log(lists[i].index);
  lists[i].onclick = function() {
    alert(this.index);
  };
}

var a = [1,2,3];
var b = a;
b[0] = 7;
b = [4,5,6];
console.log(a)

var obj = {
    'a':1,
    'b':2
}
var obj2=obj;
obj2.a=3;
console.log(obj);


var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this);
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();


// js解析的时候自动给return后面自动加“;”
function foo1()
{
 return {
     bar: "hello"
 };
}
 
function foo2()
{
 return
 {
     bar: "hello"
 };
}

var a=foo1();
var b=foo2();
console.log(a) //Object {bar: "hello"}
console.log(b) //underfind

var name = 'global';
var obj4 = {
    name: 'local',
    dose: function () {
        console.log(this);
        var that = this;
        this.name = 'dose';
        return function () {
            console.log(this)
            console.log(that.name);
            return this.name;
        }
    }
}

obj4.dose().call()