const prompt = require('prompt-sync')({sigint:true});
function concatenate(){
	var a = prompt("Entrez la première partie de la phrase :  ")
	var b = prompt("Entrez la seconde partie de la phrase :  ")
	a = a.trim() + " "
	b = b.trim()
	console.log(a + b)
}
concatenate()
