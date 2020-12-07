(function (x) { 
    console.log("this is chestnut") 
    return ((x) => function () { 
        console.log("this is haw") 
        x.printName= function(){ 
            console.log("this is x().printName") 
            return this.name 
        }
        return 200 + x.printName() + x() 
    }())
    (() => { 
        this.name=6666;
        console.log("this is pitaya"); 
        return 3999 
    }) 
})()