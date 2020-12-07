var city2 = new Function("name",()=>{console.log(`this city is nanchang`)})
city2(南昌)
function City2(){
    return{
        name:"this is nanchang",
        printName:function(){
            console.log("this city is"+this.name)
        }
    }
}
City2()