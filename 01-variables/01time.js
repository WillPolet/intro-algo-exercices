const prompt = require('prompt-sync')({sigint:true});
function time(){
	var d = Number(prompt("Give me the numbers of days :  "))
	var h = Number(prompt("Give me the numbers of hours : "))
	var m = Number(prompt("Give me the numbers of minutes : "))
	var s = Number(prompt("Give me the numbers of seconds : "))
	var time = d * 3600 * 24 + h * 3600 + m * 60 + s
	console.log(time)
}
time()
