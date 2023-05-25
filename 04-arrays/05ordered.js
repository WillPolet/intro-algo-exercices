const prompt = require('prompt-sync')({sigint:true});
function ordered(){
    var x = prompt("How much number do you want to compare ?  ")
    var tab = []
    for (let i = 0 ; i < x ; i ++){
        var a = parseInt(prompt(`Give me the number ${i+1} : `))
        tab.push(a)
    }
    for (let i = 1 ; i < tab.length + 1 ; i ++){
        if (tab[i]< tab[i-1]){
            return (`The list ${tab} is not ordered`)
        }
    }
    return (`The list ${tab} is ordered`)
}

console.log(ordered())