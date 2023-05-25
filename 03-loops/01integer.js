const prompt = require('prompt-sync')({sigint:true});
function print(n){
    for (let i = 1 ; i < n + 1 ; i++){
        console.log(i)
    }
    for (let i = n ; i > 0 ; i--){
        console.log(i)
    }
    for (let i = 2 ; i <= n ; i+=2){
        console.log(i)
    }
    for (let i = -n ; i <= n ; i++){
        console.log(i)
    }
}

var n = parseFloat(prompt("Give an integer (not too high please) : "))
print(n)