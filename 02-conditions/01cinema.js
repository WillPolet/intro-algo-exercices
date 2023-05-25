const prompt = require('prompt-sync')({sigint:true});
function cinema(a){
	if (a === 'true'){
		console.log("The price of the entrance is 8")}
	else if (a === 'false'){
		console.log("The pirce of the entrance is 10")}
	else {
		console.log("Get out of there !")}
}
var a = prompt("Do you have a coupon ? Answer 'true' or 'false' ")
cinema(a)
