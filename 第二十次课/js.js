
var nut = function () {
    console.log("this is nut-1")
    return "this is nut-2"
}
nut()
var lichee = function () {
    console.log("this is lichee-1")
    return "this is lichee-2"
}()
    + function lichee3() {
        console.log("this is lichee3")
    }()
var watermelon = function () {
    console.log("this is watermelon-1")
    return function pear() {
        console.log("this is pear-1")
    }
}
watermelon()()
let banana = function banana() {
    console.log("this is banana-1")
    return () => function () {//箭头函数语法定义函数，将原函数的“function”关键字和函数名都删掉，并使用“=>”连接参数列表和函数体。
        console.log("this is Anonymous function")
    }()
}
banana()()
let grape = function redGrape() {
    return {
        name: "my name is red grape",
        printMyName: () => {
            return () => {
                return Object.create({
                    name: "my name is grape nut",
                    printMyGrapeNut: function () {
                        console.log("this is MyGrapNut")
                    }
                })
            }
        }
    }
}
grape().printMyName()().printMyGrapeNut()

let red = function readApple() {
    return () => {
        return function () {
            return () => {
                return function () {
                    console.log("this is red apple")
                    return "this is blue apple"
                }
            }
        }
    }
}
let apple = function redApple() {
    console.log(red()()()()())
}()
var blackOrange = () => function () {
    console.log("this is small orange")
    return function () { console.log("this is big orange") }()
}()
blackOrange()

let blackberry = function () {
    console.log("this is blackberry")
    return {
        smallBlackberry: () => {
            console.log("this is smallBlackberry")
            return () => {
                console.log("this is smallBlackberry nut ")
                return 9999
            }
        }
    }
}()
