function Pear(name, price, origin, weight) {
    this.name = name,
        this.price = price,
        this.orgin,
        this.weight;
    this.printName = function () {
        console.log("this is pear" + this.name)
    }
}
Pear.prototype.printName2 = function () {
    console.log("this is printName2")
}
var p1 = new Pear("一号梨子", 12, "河南", 10)
console.log(p1.__proto__)
console.log(Pear.prototype)
console.log(p1.__proto__.__proto__)
console.log(Pear.prototype.__proto__)
console.log(p1.__proto__.__proto__.__proto__)
console.log(Pear.prototype.__proto__.__proto__)
p1.printName()
p1.printName2()