const prompt = require('prompt-sync')({sigint:true});
function dice(){
	var a = Math.floor(Math.random() * 6)
	var b = Math.floor(Math.random() * 6)
	var c = Math.floor(Math.random() * 6)
	var tab = [a,b,c]
	console.log(tab)
	if ( a == b && b == c){
		console.log("There's the same result three times ! " + a)
	}

	else if (a == b || b == c || a == c){
		console.log("There's the same result two times !")
		if (a == b || b == c){
			console.log("The result is " + b)
		}
		else{
			console.log("The result is " + a)
		}
	}
	else {
		console.log("There's no identical results")
	}
}

dice()
