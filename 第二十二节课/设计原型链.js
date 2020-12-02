function Object2() {
    this.__proto__2 = Object2.prototype2
}
Object2.prototype2 = {
    __proto__2: null
}
var obj1 = new Object2()
console.log(obj1)
console.log(obj1.__proto__2)
console.log(obj1.__proto__2.__proto__2)
//每个函数都有prototype属性，每个对象都有__proto__属性，对象的__proto__指向函数的prototype，函数prototype对象的__proto__指向Object的prototype