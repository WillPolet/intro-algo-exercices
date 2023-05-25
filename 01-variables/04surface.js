prompt = require('prompt-sync')({sigint:true});
function surface(){
	var r = prompt("Give me the radius of the circle :   ")
	var s = r**2 * Math.PI
	console.log(`The surface of this circle is ${s}.`)
}
surface()
