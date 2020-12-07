function watermelon(name, price, number) {
    this.name = name, 
    this.price = price, 
    this.number = number
} 
watermelon.prototype.getSum = function () { 
    console.log(this.price*this.number) 
}
let w =new watermelon("xigua",2,2)
w.getSum()
console.log(w.getSum())