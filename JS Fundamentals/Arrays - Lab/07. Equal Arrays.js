function solve(arryOne, arryTwo) {

    let isIdentical = true;
    let sum = 0;
 
    for(let i = 0; i < arryOne.length;i++){
        let currentDigitArryOne = Number(arryOne[i]);
        let currentDigitArryTwo = Number(arryTwo[i]);
        
        if(currentDigitArryTwo !== currentDigitArryOne){
            isIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            break;
        }else{
            sum += currentDigitArryTwo
        }

    }

    if(isIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }



} solve(['1','2','3','4','5'], ['1','2','4','4','5'])