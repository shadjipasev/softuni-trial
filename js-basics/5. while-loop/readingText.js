function readingText(input){
    let goalNumber = input[0];
    let index = 1;
    let currentNumber = input[index];
    let sum = 0;

    while(sum <= goalNumber){
        sum+= currentNumber;
        index++;
        currentNumber = input[index];
    }
    console.log(sum);
}   
readingText ([100,10,20,30,45,55,14]) 