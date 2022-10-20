function skiTrip(input){

    days = Number(input[0]);
    room = input[1];
    grade = input[2];

    let sum = 0;
    

    switch(room){
        case "room for one person":
            sum = (days - 1) * 18;
            break;
        case "apartment":
            sum = (days - 1) * 25;
            if (days < 10){
                sum = sum * 0.70;
            }else if(days >= 10 && days <= 15){
                sum = sum * 0.65;
            }else{
                sum = sum * 0.50;
            }
            break;
            
        case "president apartment":
            sum = (days - 1) * 35;
            if (days < 10){
                sum = sum * 0.90;
            }else if(days >= 10 && days <= 15){
                sum = sum * 0.85;
            }else{
                sum = sum * 0.80;
            }
            break;   
        
    }
    

    if(grade === "negative"){
        sum = sum * 0.90;
    }else{
        sum = sum * 1.25;
    }
    
    console.log(sum.toFixed(2))
   
    
} 
skiTrip(["2",
"apartment",
"positive"])



