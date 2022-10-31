function arryMani(arry, commands) {

    for (let command of commands) {
        let tokens = command.split(" ");
        let currentCommand = tokens[0];


        if (currentCommand === "add") {
            let numToAdd = Number(tokens[2]);
            let indexOfNum = Number(tokens[1]);
            arry.splice(indexOfNum, 0, numToAdd);

        } else if (currentCommand === "addMany") {
            let elements = Number(tokens[1]);
            let numbersToAdd = tokens.splice(2).map(Number);
            arry.splice(elements, 0, ...numbersToAdd);

        } else if (currentCommand === "remove") {
            let indexOfEle = tokens[1];
            arry.splice(indexOfEle, 1);

        } else if (currentCommand === "shift") {
            let positions = Number(tokens[1])
            for (let i = 0; i < positions; i++) {
                let curEle = arry.shift();
                arry.push(curEle)
            }

        } else if (currentCommand === "sumPairs") {
            let res = [];
            if (arry.length % 2 !== 0) {
                arry.push(0)
            }

            for (let i = 0; i < arry.length; i += 2) {
                let sum = arry[i] + arry[i + 1];
                res.push(sum);
                sum = 0;
            }
            arry = res;
        } else if (currentCommand === "contains") {
            let element = Number(tokens[1]);
            let indexOfNum = arry.indexOf(element)
            console.log(indexOfNum)

        } else if (currentCommand === "print") {
            console.log(`[ ${arry.join(", ")} ]`)
        }
    }

} /* arryMani([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']) */
arryMani([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
