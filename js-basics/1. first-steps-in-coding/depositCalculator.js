function depositCalculator(input){

    let depositedAmount = Number(input[0]);
    let depositTime = Number(input[1]);
    let yearProcent = Number(input[2]);
    
    let yearLihfa = depositedAmount * (yearProcent / 100);
    let monthLihfa = yearLihfa / 12
    let sum = depositedAmount + depositTime * monthLihfa
    
    console.log(sum);
}

depositCalculator(["200","3","5.7"])