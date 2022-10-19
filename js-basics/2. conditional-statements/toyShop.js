function toyShop(input){

    let vacationPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let tedyBear = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);
    
    let totalPrice = puzzle * 2.60 + talkingDoll * 3 + tedyBear * 4.10 + minions * 8.20 + truck * 2;
    let allToys = puzzle + talkingDoll + tedyBear + minions + truck;
    
    if (allToys>=50){
        totalPrice = totalPrice * 0.75;
        
    }
       totalPrice = totalPrice * 0.90;
    
       let diff = Math.abs(totalPrice - vacationPrice);
    
       if (totalPrice >= vacationPrice){
            console.log(`Yes! ${diff.toFixed(2)} lv left.`)

       }
        else{
            console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
        }

}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
