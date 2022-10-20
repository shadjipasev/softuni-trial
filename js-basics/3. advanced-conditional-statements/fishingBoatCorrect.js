function fishingBoatCorrect(input){

      let budget = Number(input[0]);
      let season = input[1];
      let fishers = Number(input[2]);

      let sum = 0;

     

      if (season === "Spring"){
          sum = 3000
       if (fishers <= 6){
            sum = sum * 0.90;
        }else if(fishers >= 7 && fishers <= 11 ){
            sum = sum * 0.85;
        }else if(fishers >= 12){
            sum = sum * 0.75
        }
    }else if(season === "Summer" || season === "Autumn"){
        sum = 4200
        if (fishers <= 6){
            sum = sum * 0.90;
        }else if(fishers >= 7 && fishers <= 11 ){
            sum = sum * 0.85;
        }else if(fishers >= 12){
            sum = sum * 0.75
        }
    }else if(season === "Winter"){
        sum = 2600;
        if (fishers <= 6){
            sum = sum * 0.90;
        }else if(fishers >= 7 && fishers <= 11 ){
            sum = sum * 0.85;
        }else if(fishers >= 12){
            sum = sum * 0.75
        }
    }
    
    let diff = Math.abs(sum - budget)
    if (season ==!"Autumn"){
        if (fishers % 2 === 0){
            sum = sum * 0.95
        }
    }
    if (budget >= sum){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else if(budget <= sum){
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
   
    
       
        

   


}fishingBoatCorrect(["3600",
"Winter",
"13"])

