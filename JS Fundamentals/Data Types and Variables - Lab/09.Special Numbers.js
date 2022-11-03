function solve(num) {
    
    for (let i = 1; i <= num; i++) {
        let sumOfDigits = 0;
        let iAsString = i.toString();
        
        for (let n = 0; n <= iAsString.length; n++) {
            sumOfDigits += Number(iAsString.charAt(n))
        }

        let isSpecial = false;

        if (sumOfDigits === 7 || sumOfDigits === 5 || sumOfDigits === 11){
            isSpecial = true;
        }
        
        if(isSpecial){
            console.log(`${i} -> True`)
        }else{
            console.log(`${i} -> False`)
        }

    }
} solve(20)