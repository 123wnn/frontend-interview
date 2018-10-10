/* https://www.cnblogs.com/CandyManPing/p/5386767.html
数据类型：基本类型值、引用类型值

栈内存：一般代码逻辑，简单变量机构体都是放入栈中，
堆内存：而对象以及被装箱的数据是放入堆中的
基本类型值：指的是保存在栈内存中的简单数据段
引用类型值：指的是那些保存在堆内存中的对象，意思是变量中保存的实际上只是一个指针，这个指针指向内存堆中的实际值；
*/

// 两种类型的复制：
/*
(1)基本类型的复制
    从一个变量向一个变量复制时，会在栈中创建一个新值，然后把值复制到位新变量分配的位置上，改变源数据不会影响到新的变量
(2)引用类型变量的复制
    复制的存储在栈中的指针，将指针复制到栈中为新变量分配的空间中，而这个指针副本和原指针执行存储在堆中的同一个对象，复制操作结束后，两个变量实际上将引用同一个对象，因此改变其中一个将影响另一个
*/
// 两种变量类型的监测
/*
    1.Typeof操作符是检测基本类型的最佳工具；
    2.如果变量值是nul或者对象，typeof 将返回“object”；
    3.Instanceof用于检测引用类型，可以检测到具体的，它是什么类型的实例；
    4.如果变量是给定引用类型的实例，instanceof操作符会返回true;
*/ 


/**
 * js的基本数据类型
 * null undefined string number boolean object
 * (1)原始数据类型  null undefined string number boolean
 * (2)引用数据类型 object
 * 
 */
// （1）原始数据类型：将变量名和值都存储在栈内存中
// （2）引用数据类型：将变量名存储在栈内存中，将值存储在堆内存中，并在栈内存中存储值的地址，该地址指向堆内存中的值
// （3）null 表示一个标识被赋值了，且该标识赋值为空值，从逻辑角度来看

// a instanceof Array  可以判别内置对象类型，不能判别原始类型值，例如 instanceof String :false
// typeof a 可以判别标准类型，除了null之外，不能判别标准的对象类型
let a2= [];
let a3={};
console.log(typeof a2);
console.log(typeof a3);

console.log( a2 instanceof Array);
console.log( a3 instanceof Object);

(function(){
    var a = b = 3;
  })();
  console.log(b + (typeof b !== 'undefined'));


  var obj1={},obj2={};
  console.log(obj1 == obj2);
  var l="1",m='a';
  console.log(typeof(l+m));
  var bbb;
  console.log(bbb);
  var aaa=undefind;
  console.log(aaa);


 