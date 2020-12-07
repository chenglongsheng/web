function $2(x){
    if(typeof x == "string"){
        let targets = window.document.getElementsByTagName(x)
        if(targets.length>0){
            let array = targets
            for(var i=0;i<array.length;i++){
                const element=array[i]
                element.style.backgroundColor="red"
            }
        }
    }
}
$2("div")
console.log(typeof "div")