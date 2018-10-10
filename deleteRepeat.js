
/**
 * 给数组添加一个去重方法
 * @param {any} a 
 * @param {any} b 
 */
Array.prototype.delRepeat = function () {
    var arr = [];    //定义一个临时数组  
    for (var i = 0; i < this.length; i++) {    //循环遍历当前数组  
        //判断当前数组下标为i的元素是否已经保存到临时数组  
        //如果已保存，则跳过，否则将此元素保存到临时数组中  
        if (arr.indexOf(this[i]) == -1) {
            arr.push(this[i]);
        }
    }
    return arr;
};
var array = [1, 1, 1, 2, 3, 4, 5, 6, 6, 7];
array.delRepeat();

/**
 * es6 set去重
 * [...new Set(array)]
 * 数组map(),filter()
 * @param {any} a 
 * @param {any} b 
 */
var array2 = [1, 1, 1, 2, 3, 4, 5, 6, 6, 7];
[...new Set(array2)]

let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set1 = new Set([1, 2, 3, 4, 5]);
set1 = new Set([...set1].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}

let array3 = [ 1, 2, 3, 4, 5, 6, 6, 7];
let arr = array3.map(x => (x % 2) == 0);
console.log(arr)










