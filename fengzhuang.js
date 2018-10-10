

/**
 * 封装插件
 * @param {any} name 
 * @param {any} age 
 */
function Swiper(name,age) {
    this.name = name;
    this.age = age;
}

Swiper.prototype.get = function () {
    console.log(this.name);
}

let a = new Swiper('你妹的');
a.get();

