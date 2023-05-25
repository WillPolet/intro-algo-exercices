const prompt = require('prompt-sync')({sigint:true});
function print(n){
    for (let i = 0 ; i < n + 1 ; i++){
        console.log(i)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

x = getRandomInt(20)

print(x)