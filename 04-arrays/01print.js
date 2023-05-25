const prompt = require('prompt-sync')({sigint:true});
function printArray(){
    var a = [0,1,2,'John',-6,'Something']
    console.log(`Hey this is an array ! \[${a}\]`)
    for (let i = 0 ; i < a.length ; i++){
        console.log(a[i])
    }
}

printArray()