function oddAndEven(num){

    num = num.toString()

    function oddSum(num){
        num = num.toString()
        let sum = 0;
        for(let i = 0; i < num.length; i++){
            let currentDigit = Number(num[i]);
            if(currentDigit % 2 !== 0){
                sum += currentDigit
            }
        }
        return sum
    }

    function evenSum(num){
        num = num.toString()
        let sum = 0;
        for(let i = 0; i < num.length; i++){
            let currentDigit = Number(num[i]);
            if(currentDigit % 2 === 0){
                sum += currentDigit
            }
        }
        return sum
    }

    console.log(`Odd sum = ${oddSum(num)}, Even sum = ${evenSum(num)}`)
    

}oddAndEven(1000435)
