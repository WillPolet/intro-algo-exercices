const prompt = require('prompt-sync')({sigint:true});
function VAT(){
	var x = prompt("Give me the pirce of the object :   ")
	var a = prompt("Do you want to : a) convert price without VAT to a price with VAT or b) the opposite ? (type a or b)")
	var v = Number(prompt("Give me the VAT (in decimal ex for 21% answer 0.21) :  "))
	if (a === 'a'){
		var y = (1 + v) * x
		console.log(`Your price (${x}) with VAT is ${y}`)}
	else{
		var y = x / (1 + v)
		console.log(`Your price (${x}) without VAT is ${y}`)}
}
VAT()
