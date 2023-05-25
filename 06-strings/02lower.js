const prompt = require('prompt-sync')({sigint:true});
function lower(){
    var a = prompt("Give me a sentence with uppercase if you want, I don't care.  ")
    a = a.toLowerCase()
    console.log(a)
}

lower()