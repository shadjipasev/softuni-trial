function inSearchForTheNum(arry,commands){

    let numOfElements = Number(commands[0]);
    let numToDelete = Number(commands[1]);
    let specialNum = Number(commands[2]);

    
    let selectedNumArry = arry.slice(0,numOfElements)
    selectedNumArry.splice(0,numToDelete)
    let counter = 0;

    for(let num of selectedNumArry){
        if(num == specialNum){
            counter++;
        }
    }

    console.log(`Number ${specialNum} occurs ${counter} times.`)

 

    
}inSearchForTheNum([5, 2, 3, 4, 1, 6],[5, 2, 3])