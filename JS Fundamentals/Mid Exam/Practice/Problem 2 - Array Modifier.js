function arryModifier(commands) {

    let arryOfNum = commands.shift().split(" ");


    for (let command of commands) {
        let tokens = command.split(" ");
        let currentCommand = tokens[0];

        if (currentCommand === "swap") {
            let firstNum = tokens[1];
            let secondNum = tokens[2];
            let firstNumDigit = arryOfNum[firstNum];
            let secondNumDigit = arryOfNum[secondNum];

            arryOfNum.splice(firstNum, 1, secondNumDigit);
            arryOfNum.splice(secondNum, 1, firstNumDigit);
            

        } else if (currentCommand === "multiply") {

            let firstNum = Number(tokens[1]);
            let secondNum = Number(tokens[2]);
            let firstNumDigit = arryOfNum[firstNum];
            let secondNumDigit = arryOfNum[secondNum];

            let sumOfIndex = firstNumDigit * secondNumDigit;

            arryOfNum.splice(firstNum, 1, sumOfIndex);
            



        } else if (currentCommand === "decrease") {
            for(let i = 0; i < arryOfNum.length; i++){
                   arryOfNum[i];
            }
            
            /* arryOfNum.map(Number)
            arryOfNum.map(x => x - 1); */
            


        } else if (currentCommand === "end "){
            break;
        }


    }

    console.log(arryOfNum.join(", "))


} arryModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])