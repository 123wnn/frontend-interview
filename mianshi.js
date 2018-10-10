{/* <script type="text/javascript" src="./extends.js"></script>
    <script type="text/javascript" src="./deleteRepeat.js"></script>
    <script type="text/javascript" src="./fengzhuang.js"></script>
    <script type="text/javascript" src="./datatype.js"></script>
    <script type="text/javascript" src="./es6.js"></script>
    <script type="text/javascript" src="./bibao.js"></script> */}



//数组去重
Array.prototype.unique = function(){
    var result = [];
    this.forEach(function(v){
    if(result.indexOf(v) < 0){
    result.push(v);
    }
    });
    return result;
}

console.log([...(new Set([1,1,2,2,3]))])

//将一串字符串反转
    //法1
    let str1 = "123445";
    console.log(str1.split(''));
    console.log(str1.split('').reverse());
    str1.split('').reverse().join('')

    //法2
    let str2 = 'abcde';
    let arr1 = str2.split('');
    let arr2 = [];
    for(var i=0;i<arr1.length;i++){
        arr2.push(arr1[arr1.length-i-1]);
    }
    console.log(arr2.join(''));

function arg(value){
    console.log(arguments[0]);
}
arg(1);





