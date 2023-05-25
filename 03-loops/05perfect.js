const prompt = require('prompt-sync')({sigint:true});
function isPerfect(a){
    var sumDiv = 0
    for (i =  1 ; i < a ; i++){
        if ((a / i)%1 == 0){
            sumDiv += i
        }
    }
    if (sumDiv == a){
        console.log(`${a} is a perfect number`)
    }
    else{
        console.log(`${a} is not a perfect number`)
    }
}

var x = prompt("Give a number, we will see if he is perfect or not :  ")
isPerfect(x)