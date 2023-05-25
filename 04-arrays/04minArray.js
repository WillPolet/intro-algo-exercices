const prompt = require('prompt-sync')({sigint:true});
function min(){
    var x = prompt("How much number do you want to compare ?  ")
    var min = Infinity
    var tab = []
    for (let i = 0 ; i < x ; i ++){
        var a = parseInt(prompt(`Give me the number ${i+1} : `))
        tab.push(a)
        if (a <= min){
            min = a
        }
    }
    var indices = []
    var idx = tab.indexOf(min);
    while (idx != -1) {
    indices.push(idx + 1);
    idx = tab.indexOf(min, idx + 1); // begin to search from the second variable.
    }
    console.log(`The lowest number is ${min} at the place(s) ${indices}`)
}

min()