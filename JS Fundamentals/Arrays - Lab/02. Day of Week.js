function solve(day){
    
    let weekDays = ["Monday"
,"Tuesday"
,"Wednesday"
,"Thursday"
,"Friday"
,"Saturday"
,"Sunday"];

let currentDay = day - 1;
    if(day >= 1 && day <= 7){
        console.log(weekDays[currentDay]);
    }else{
        console.log("Invalid day!")
    }
    

    

    

}solve(3)
solve(6)
solve(11)