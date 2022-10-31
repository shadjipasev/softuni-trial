function solve(arry){


   let maxNumArry = [];
   let secondCurrentDigit = 0;




    for(let i = 0; i < arry.length; i++){
        let currentDigit = arry[i];
        let isTopInteger = true;

        for(let j  = i + 1;j < arry.length; j++){
           secondCurrentDigit = arry[j];

           if(currentDigit <= secondCurrentDigit){
               isTopInteger = false;
               break;
           }
        }
        if(isTopInteger){
            maxNumArry.push(arry[i]);
        }




    }
    console.log(maxNumArry.join(" "));
    

}solve([14, 24, 3, 19, 15, 17])