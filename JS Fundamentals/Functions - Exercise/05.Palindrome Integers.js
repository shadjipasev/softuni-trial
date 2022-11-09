function palindromeNum(arryNumbers) {

    function backwardsNum(num){
        let currentNum = num;
        let reversedNum = Number(num.toString().split("").reverse().join(""));
        
        if(currentNum === reversedNum){
            return true;
        }else{
            return false;
        }

    }
    for (let i = 0; i < arryNumbers.length; i++){
        let currentNumber = arryNumbers[i];
        console.log(backwardsNum(currentNumber))
    }


  

} 
palindromeNum([123, 323, 421, 121])