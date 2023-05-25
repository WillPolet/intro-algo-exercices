const prompt = require('prompt-sync')({sigint:true});
function max(){
    var x = prompt("How much number do you want to compare ?  ")
    var max = 0
    for (let i = 0 ; i < x ; i ++){
        var a = prompt(`Give me the number ${i+1} : `)
        if (a >= max){
            max = a
        }
    }
    console.log(`The highest number is ${max}`)
}

max()