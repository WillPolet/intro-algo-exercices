const prompt = require('prompt-sync')({sigint:true});
function Upper(){
    var a = prompt("Give me a sentence with lowercase if you want, I don't care.  ")
    a = a.toUpperCase()
    console.log(a)
}

Upper()