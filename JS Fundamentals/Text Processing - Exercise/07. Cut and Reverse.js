function solve(input){

    let wholeSize = input.length;
    let firstHalf = input.substring(0,wholeSize/2);
    let secondHafl = input.substring(wholeSize/2);

    
    let firstWord = "";
    let secondWord = "";
    for(let i = input.length-1; i >= wholeSize/2; i--){
        firstWord += input[i];
    }
    for(let i = wholeSize/2 - 1; i >= 0; i--){
        secondWord += input[i];
    }
    console.log(secondWord);
    console.log(firstWord)

}solve('tluciffiDsIsihTgnizamAoSsIsihT')