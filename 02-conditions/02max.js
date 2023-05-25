const prompt = require('prompt-sync')({sigint:true});
function max(){
	var a = parseFloat(prompt("Give the first number : "))
	var b = parseFloat(prompt("Give the second number : "))
	var c = parseFloat(prompt("Give the third number : "))
	console.log(Math.max(a,b,c))
}
max()
