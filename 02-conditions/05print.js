const prompt = require('prompt-sync')({sigint:true});
function print(){
    var x = parseFloat(prompt("How much copy do you want to do ? "))
    if (x < 11){
        console.log("Le prix à payer est de : " + x * 0.12)
    }
    else if (x < 31){
        var price = (1.2) + (x - 10) * 0.11
        console.log("Le prix à payer est de : " + price)
        var a = (x - 10)*0.11
        var b = 1.2
        b = parseFloat(b.toFixed(1))
        console.log(a)
        console.log(b)
        console.log(a + b)
    }

    else {
        var price = 1.2 + 1.1 + (x - 30) * 0.1
        console.log("Le prix à payer est de : " + price)
    }
}

print()

console.log(0.1 + 0.2)