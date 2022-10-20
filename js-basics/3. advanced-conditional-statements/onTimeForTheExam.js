 function onTimeForTheExam(input) {

    let examHours = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHours = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examTime = examHours * 60 + examMin;
    let arriveTime = arriveHours * 60 + arriveMin;
    

    if(examTime < arriveTime) {
        console.log("Late");
    } else if (examTime <= arriveTime || examTime - arriveTime <= 30) {
        console.log("On time");
    } else if (examTime < arriveTime || examTime - arriveTime > 30) {
        console.log("Early");
    }

    
    let diff = Math.abs(examTime - arriveTime);
    let diffHours = Math.floor(diff / 60);
    let diffMinutes = diff % 60;




    
    if (examTime > arriveTime && diff < 60) {
        console.log(`${diffMinutes} minutes before the start`);  

    } else if (examTime > arriveTime && diff >= 60 && diffMinutes < 10) {
        console.log(`${diffHours}:0${diffMinutes} hours before the start`);

    } else if (examTime > arriveTime && diff >= 60) {
        
        console.log(`${diffHours}:${diffMinutes} hours before the start`);  

    } else if (examTime < arriveTime && diff < 60) {
        console.log(`${diffMinutes} minutes after the start`);

    } else if (examTime < arriveTime && diff > 60 && diffMinutes < 10) {
        console.log(`${diffHours}:0${diffMinutes} hours after the start`);

    } else if (examTime < arriveTime && diff >60) {
        console.log(`${diffHours}:${diffMinutes} hours after the start`);

    }
 


 } onTimeForTheExam(["11",
 "30",
 "10",
 "55"])
 
 
 
 
 
 
 
 
 
 
 
 
 
 
