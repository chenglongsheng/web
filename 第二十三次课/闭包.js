function pear() {
    var number = 0
    return function () {
        console.log(number++)
    }
}
var p1 = pear()
p1()
p1()
p1()
p1()

function pear() {
    var number = 0
    while (number < 10) {
        number++
        return function () {
            console.log(number)
        }
    }
}
pear()