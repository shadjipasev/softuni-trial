function vacation(input){
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    
    let totalDays = 0;
    let totalDaysSpend = 0;

    while(money < moneyNeeded){
        let command = input[index];
        index++;
        let moneyPrep = Number(input[index]);        
        index++;
        totalDays++;

        switch(command){ 
            case "save": money += moneyPrep;
            totalDaysSpend = 0;
            break;

            case "spend": money -= moneyPrep;
                totalDaysSpend++;
                if(money < 0){
                   money = 0;
                }
            
                
        }
        if(totalDaysSpend === 5){
            console.log(`You can't save the money.`);
            console.log(totalDays);
            break;
        }


         
    }

    if(money >= moneyNeeded){
    console.log(`You saved the money for ${totalDays} days.`);
    }

}vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



