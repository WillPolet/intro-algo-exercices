const prompt = require('prompt-sync')({sigint:true});
function convert(){
    var a = prompt("Give me a name and a first name separated with a coma  ")
    var strArray = a.split(",");
    console.log(strArray)
    console.log(`Hello, ${strArray[1].trim()} ${strArray[0].trim()}`)
}

convert()