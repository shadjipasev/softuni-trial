function sumFromTwoNumber(input){
    let startingNumber = Number(input[0]);
    let finalNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let isCombinationNotFound = false;

    let combinationNumber = 0;

    for (let i = startingNumber; i <= finalNumber; i++){
        for (let j = startingNumber; j <= finalNumber; j++){
            combinationNumber++
            if(i + j === magicNumber){
                console.log(`Combination N:${combinationNumber} (${i} + ${j} = ${magicNumber})`);
                isCombinationNotFound = true;
                break;
            }
            
        }
        if(isCombinationNotFound){
            break;
        }
        
    }
    if(!isCombinationNotFound){
    console.log(`${combinationNumber} combinations - neither equals ${magicNumber}`);
    }
    
    
}sumFromTwoNumber(["23","24","20"])