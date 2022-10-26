function pyramidFromNumber(input){
   
    let finalNumber = Number(input[0]);
    let current = 1;
    let printCurrentLine = "";
    let isBigger = false;

    for(let rows = 1; rows <= finalNumber; rows++){
        for(let cols = 1; cols <= rows; cols++){
            if(current > finalNumber){
              isBigger = true;
              break;
            }
            printCurrentLine += current + " ";
            current++
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }
    }


}pyramidFromNumber(["12"])