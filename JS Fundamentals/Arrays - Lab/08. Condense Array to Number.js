function condenceArry(nums) {

    let condence = [];
    
    for(let z of nums){
        condence.push(z);
    }
     
    while(condence.length > 1){
    let temp = []; 
    for(let i = 0;i < condence.length- 1; i++){
        temp.push(condence[i] + condence[i + 1]);
               
    } 
    condence = temp;
}

console.log(condence[0])

} condenceArry([2, 10, 3])