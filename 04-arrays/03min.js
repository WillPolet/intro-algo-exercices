const prompt = require('prompt-sync')({sigint:true});
function min(){
    var x = prompt("How much number do you want to compare ?  ")
    var min = Infinity
    for (let i = 0 ; i < x ; i ++){
        var a = parseInt(prompt(`Give me the number ${i+1} : `))
        if (a <= min){
            min = a
        }
    }
    console.log(`The lowest number is ${min}`)
}

min()