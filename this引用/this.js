// call apply bind 方法改变this引用
function Apple(name, price, address) {
    this.name = name
    this.price = price
    this.address = address
}
let apple1 = new Apple("redApple", 20, "nanchang")
let apple2 = new Apple("greenApple", 30, "ganzhou")

// 定义数组
let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = new Array(6)
arr2[0] = 'A'
arr2[1] = 'B'
arr2[2] = 'C'
for (let i = 0; i < arr1.length; i++) {
    console.log(arr[i])
}
arr1.every(function (arg) {
    console.log(arg)
    return true
})

// 函数的参数问题
function printName(a, b) {
    console.log(a)
    console.log(b)
    console.log(arguments)
    console.log(arguments.length)
    console.log('_______________________')
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
    arguments.every(function (value) {
        console.log(value)
        return true
    })
}
printName(1, 2, 3)

// call apply bind
let obj4 = {
    name: "apple",
}
function printName3(a, b) {
    console.log(a)
    console.log(b)
    console.log(this.name)
    console.log(arguments)
    Array.prototype.every.call(arguments, function (arg) {
        console.log(arg)
        return true
    })
    Array.prototype.every.bind(arguments)(function (arg) {
        console.log(arg)
        return true
    })
}
printName3(1, 2, 3, 4, 5, 6)

// call方法改变this引用
printName3.call(obj4, 2, 3)

// apple
printName3.apply(obj4, [1, 2, 3, 4, 5, 6])

// bind
printName3.bind(obj4)(2, 3, 4, 6, 7, 8)


// 计算属性
var pre = 'teacher_'
let obj5 = {
    teacher_name: "zhangsan",
    teacher_run: function () {
        console.log("teacher is running")
    }
}
obj5[pre + "eat"] = function () {
    console.log("teacher is eating")
}


// rest参数
function printName4(a, ...rest) {
    console.log(a)
    console.log(rest)
    console.log(c)
}
printName4(1, 2, 3, 4)