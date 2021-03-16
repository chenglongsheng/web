// 数组
// 在JS中定义

var a = 1
let b = 2
const c = 2 // 定义常量


// 定义空数组
var arr = []
var arr2 = [1, 2, 3, 4, 5]
var arr3 = new Array(4)
var arr4 = Array(5)
console.log(arr4[0])//缺省值是undefined

//获取长度
var len = arr.length

var arr7 = [1, 2, 3, 4, 5, 6]
arr7.length = 3
console.log(arr7[4])

//push方法 pop方法
var arr8 = [1, 2, 3, 4, 5]
arr8.push(9)
console.log(arr8[5])
arr8.pop()
console.log(arr8[8])


//Array.from()方法
var str1 = 'asdnakjsdjk123131'
var arr9 = Array.from(str1)
console.log(arr9)

//Array.of()方法
let arr10 = Array.of('abc', '123')
console.log(arr10)

//循环
var arr11 = [1, 2, 3, 4, 5]
for (var i = 0; i < arr11.length; i++) {
    console.log(arr11[i])
}

//for-in
var arr12 = [1, 2, 3, 4, 5]
for (var arr in arr12) {
    console.log(arr)
}

//遍历一个对象
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}

var person = {
    name: 'zhangsan',
    age: 19,
    address: 'nanchang'
}
for (var obj in person) {
    console.log(person[obj])
}

//遍历数组
var arr13 = [1, 23, 4]
arr14.forEach(function () {

})

var obj6 = {
    f1: function () {
        console.log("this is function1")
        this.f2()
    },
    f2: function () {
        console.log("this is function2")
    }
}

var obj7 = {
    f2: function () {
        console.log("this is function2 obj7")
    }
}

var arr30 = [1, 2, 3];
arr30.forEach(obj6.f1, obj7)

var arr31 = [1, 2, 3, 4, 5, 6]
for (var i = 0; i < arr31.length; i++) {
    console.log(arr31[i])
}


var arr32 = [1, 2, 3, 4, 5, 6]
arr32.every(function (arg) {
    console.log(arg)
    return true
})

arr32.find()


// for_of
var obj40 = [
    {name :"pitaya",value:20},
    {name:"apple",value:30},
    {name:"orange",value:40},
    {name:"peach",value:50}
]
for (const iterator of obj40) {
    console.log(iterator.name)
}


for (const key in obj40) {
    if (Object.hasOwnProperty.call(obj40, key)) { //判断是否本身属性
        const element = obj40[key];
        
    }
}

var arr41 = ["pitaya","apple","orange","peach"]
for (const iterator of arr41) {
    console.log(iterator)
}
for (const key in arr41) {
    if (Object.hasOwnProperty.call(arr41, key)) {
        const element = arr41[key];
        console.log(key)
    }
}