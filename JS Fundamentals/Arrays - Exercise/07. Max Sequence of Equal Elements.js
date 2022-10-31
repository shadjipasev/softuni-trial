function maxSeq(arry){

    let firstSequence = [];
    let finalSequence = [];
 

    for(let i = 0; i < arry.length; i++){
        firstSequence = []
        
        for(let j = i; j < arry.length; j++){
            if(arry[i] === arry[j]){
                firstSequence.push(arry[j])
            }else{
                break;
            }
        }
        if(firstSequence.length > finalSequence.length){
            finalSequence = firstSequence;
        }
    }   


    console.log(finalSequence.join(" "))

}maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])