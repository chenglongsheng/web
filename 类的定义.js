// 数组的方法
let arr = [1, 2, 3, 4, 5, 6]
// shift 方法 删除数组首元素
let result = arr.shift()
console.log(result)
console.log(arr)

// unshift 方法 是新增的元素放到数组的前面 
let arr1 = [1, 2, 3, 4, 5, 6]
let result1 = arr1.unshift(7)
console.log(result1)
console.log(arr1)

// 切片 
let arr2 = [1, 2, 3, 4, 5, 6]
let result2 = arr2.slice(2, 4)
console.log(result2)
console.log(arr2)

// splice
let arr3 = [1, 2, 3, 4, 5, 6]
let result3 = arr3.splice(2, 4)
console.log(result3)
console.log(arr3)

// 类的定义
function Point(x, y) {
    this.x = x
    this.y = y
}
Point.prototype.print = function () {
    console.log(this.x)
    console.log(this.y)
}
let point = new Point(45, 65)
point.print()


// 语法糖  Point2实质是function
class Point2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    print() {
        console.log(this.x)
        console.log(this.y)
    }
}
let point2 = new Point2(99, 100)
point2.print()

class Point3 {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }
    printName() {
        console.log(this.name)
    }
    printAge() {
        console.log(this.age)
    }
    printAddress() {
        console.log(this.address)
    }
}
var point3 = new Point3('zhang', 13, 'jiangxi')
point3.printName()
point3.printAge()
point3.printAddress()


console.log(Object.is(1, '1'))

// isNaN  is Not a Number
function sum(a, b) {
    console.log(a)
    console.log(b)
    if (!isNaN(b)) {
        console.log('wore')
        return;
    }
    return a + b;
}
console.log(sum(12, '13'))

// es6
let point5 = {
    x: function () {
        console.log("this is x")
    },
    y() {
        console.log("this is y")
    }
}
point5.x()

//Object.assign
//复制 深拷贝 浅拷贝
let newObj = Object.assign({name:"zhangsan",age:13},{age:20})
console.log(newObj)