const prompt = require('prompt-sync')({sigint:true});
function sum (){
    var a = parseFloat(prompt('Veuillez entrer le premier terme de la somme :  '))
    var b = parseFloat(prompt('Veuillez entrer le second terme de la somme :  '))
    return(`La somme de ${a} et ${b} est ${a + b}`)
}
console.log(sum())
