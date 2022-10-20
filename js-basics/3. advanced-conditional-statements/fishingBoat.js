function fishingBoat(input){

    let budgetGroup = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    let sum = 0;

    switch (season){
        case "Spring":
            sum = 3000;
            if (fishers <= 6){
            sum = sum * 0.90;
              
        }
        break;

        case "Summer":
        case "Autumn":
            sum = 4200 
            if (fishers >= 7 && fishers <= 11){
            sum = sum * 0.80;
                }if (fishers % 2){
                    sum = sum * 0.95

            
        }
        break;

        case "Winter":
            sum = 2600;
            if (fishers > 12 && fishers % 2){
            sum = sum * 0.70;   
            }
        break;    

    }
    let diff = Math.abs(budgetGroup - sum)
    
    if (budgetGroup <= sum){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else{ (sum >= budgetGroup)
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

} fishingBoat(["3600",
"Autumn",
"6"])

