function solve(arry) {

    let sumOfEven = 0;
     
    for (let i = 0; i < arry.length; i++){
        let currentDigit = Number(arry[i]);
        if(currentDigit % 2 === 0){
            sumOfEven+=currentDigit;
        }
    }
    console.log(sumOfEven)

} solve(['1', '2', '3', '4', '5', '6'])