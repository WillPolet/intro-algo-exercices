const prompt = require('prompt-sync')({sigint:true});
function div (){
	var a = parseFloat(prompt("Entrez le dividende :  "))
	var b = parseFloat(prompt("Entrez le diviseur :  "))
	if (b == 0){
		console.log("Diviser par 0 n'est pas possible ! Choisissez un autre nombre.")
		div()
	}
	while (c !== 'Oui' && c !== 'Non'){
		var c = prompt("Voulez vous faire une division entière ? Tapez 'Oui' ou 'Non' ")
		if (c === 'Oui'){
			let reste = a%b
			let div = a - reste
			let quotient = div/b
			console.log(`la division de ${a} par ${b} donne comme quotient ${quotient} avec pour reste ${reste}`)}
		else if (c === 'Non'){
			let quotient = a/b
			console.log(`la division de ${a} par ${b} donne comme quotient ${quotient}`)}
		else {
			console.log(`Veuillez entrer une réponse valide s'il vous plaît`)}
	}

	}
div ()
