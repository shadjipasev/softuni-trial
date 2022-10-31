function solve(arryOne, arryTwo) {

    for (let i = 0; i < arryOne.length; i++) {
        for (let j = 0;j < arryTwo.length; j++){
            if(arryOne[i] === arryTwo[j]){
                console.log(arryOne[i]);
            }
        }
    }



} solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])