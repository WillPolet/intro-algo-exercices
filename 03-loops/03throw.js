const prompt = require('prompt-sync')({sigint:true});
function throw_dice(jet,b){
    var one = 0
    var two = 0
    var three = 0
    var four = 0
    var five = 0
    var six = 0
    var tab = [one, two, three, four, five, six]
    for (let i = 0 ; i < b ; i++){
        var a = parseInt(Math.floor(Math.random() * 6 + 1))
        tab[a-1]+=1
        // switch (a) {
        //     case 1 :
        //         one +=1;
        //     break;
            
        //     case 2 :
        //         two +=1;
        //     break;

        //     case 3 :
        //         three +=1;
        //     break;

        //     case 4 :
        //         four +=1;
        //     break;

        //     case 5 :
        //         five +=1;
        //     break;

        //     case 6 :
        //         six +=1;
        // }
    }
    console.log(`The ${jet} appear ${tab[jet - 1]} times in ${b} throws`)
}

throw_dice(3,10)