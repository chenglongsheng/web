//+ - ！ ~ void
void function haw() {
    console.log("this is haw")
}()

// 加叹号转义成 booolean
let h2 = !function test() {
    console.log("This is h2")
    return 0; // 非0为真
}()
console.log(h2)

//函数另一种定义
let pea1 = 'return ' + '`我是一粒${name}`';
let peanut5 = new Function('name', pea1);
console.log(peanut5("花生"))

var peanut6 = function (name) {
    return "我是一粒" + name;
}