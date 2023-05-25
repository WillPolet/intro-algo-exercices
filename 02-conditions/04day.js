const prompt = require('prompt-sync')({sigint:true});
function day(){
    x = parseFloat(prompt("Donnez un nombre pour le jour : "))
    x = x%7
    switch (x) {
        case 1 :
            console.log("Lundi");
        break;
        case 2 :
            console.log("Mardi");
        break;
        case 3 :
            console.log("Mercredi");
        break;
        case 4 :
            console.log("Jeudi");
        break;
        case 5 :
            console.log("Vendredi");
        break;
        case 6 :
            console.log("Samedi");
        break;
        case 0 :
            console.log("Dimanche");
    }
}

day()