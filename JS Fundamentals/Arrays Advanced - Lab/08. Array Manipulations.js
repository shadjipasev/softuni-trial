function manipulation(commands) {

    let arry = commands.shift().split(" ").map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, num1, num2] = commands[i].split(" ");
        firstNum = Number(num1);
        secondNum = Number(num2);

        switch (command) {
            case "Add":
                arry.push(firstNum)
                break;
            case "Remove":
                arry = arry.filter(x => x !== firstNum)
                break;
            case "RemoveAt":
                arry.splice(num1,1)
                break;
            case "Insert":
                arry.splice(num2,0,num1)    

        }

    

    }



    console.log(arry.join(" "))



} manipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])