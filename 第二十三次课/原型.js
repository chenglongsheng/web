var nut = function () {

}
console.log(nut.prototype == new nut().__proto__)
console.log(nut.prototype.__proto__ == Object.prototype)
console.log(nut.prototype.__proto__.__proto__)