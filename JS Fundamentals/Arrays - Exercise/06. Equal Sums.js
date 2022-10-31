function equalSums(arry){

    let isEqual = false;

    

    for(let i  = 0; i < arry.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        

        for(let j = i - 1; j >= 0; j--){
            leftSum += arry[j];
        }
        for(let num = i + 1; num < arry.length; num++){
            rightSum += arry[num];
        } 
        
        if(leftSum === rightSum){
            console.log(i);
            isEqual = true;
        }
         
    }
      


if(!isEqual){
    console.log("no");
}



}equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])