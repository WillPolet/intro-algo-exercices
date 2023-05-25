const prompt = require('prompt-sync')({sigint:true});
function spaces(){
    var a = prompt("Write a sentence full of spaces ! ")
    a = a.trim()
    var strArray = a.split(" ");
    for (i = 0 ; i < strArray.length ; i ++){
        if (strArray[i] === strArray[i+1]){
            delete strArray[i]
        }
        if (strArray[i] === " " && strArray[i+1] === ","){
            delete strArray[i]
        }
    }
    var tab = strArray.filter(elm => elm)
    var sentence = tab.join(" ")
    console.log(sentence)
}

spaces()