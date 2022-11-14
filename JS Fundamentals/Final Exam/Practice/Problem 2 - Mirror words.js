function solve(input){

    let pattern = /(#|@)(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
    let text = input[0];         
    let match = pattern.exec(text)

    let result = {};
    
    let counter = 0;
    let isMiror = false;
    while(match != null){
        counter++
        let firstWord = match[2];
        let secondWord = match[3];
        let reversedSecondWord = secondWord.split("").reverse().join("");
        if(firstWord === reversedSecondWord){
            isMiror = true;
            result[firstWord] = secondWord;
        }

        
        
        match = pattern.exec(text);
    }

    if(counter == 0){
      console.log(`No word pairs found!`); 
    }else{
        console.log(`${counter} word pairs found!`);
    }
let finalRes = [];
    for(let [pairOne, pairTwo] of Object.entries(result)){
         finalRes.push(`${pairOne} <=> ${pairTwo}`);
    }

    if(isMiror){
    console.log(`The mirror words are:\n${finalRes.join(", ")}`);
    }
    if(!isMiror){
    console.log("No mirror words!");
    }


}solve([
    "#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"
    ]
    )