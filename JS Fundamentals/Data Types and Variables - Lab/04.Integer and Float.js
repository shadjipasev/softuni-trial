function solve(number1, number2, number3) {

    let sum = number3 + number2 + number1;
    
    if(sum % 1 !== 0){
        console.log(`${sum} - Float`);
    }else{
        console.log(`${sum} - Integer`)
    }

    

}solve(9, 100, 1.1)