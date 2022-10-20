function weekendOrWorkingDay(input){

    let dayOfWeek = input[0];

    switch(dayOfWeek){
        case "Monday" :
        case "Tuesday" : 
        case "Wednesday" :  
        case "Thursday" :
        case "Friday" : console.log("Workday");brake;
        case "Saturday" :
        case "Sunday" : console.log("Weekend");brake;
        default : console.log("error");
        


    }
   
}   weekendOrWorkingDay(["Monday"])