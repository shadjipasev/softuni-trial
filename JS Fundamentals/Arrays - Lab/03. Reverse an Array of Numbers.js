function solve(num,array){

    let newArray = [];

    for(let i = 0; i < num; i++){
        newArray.push(array[i]);
    }
    
    let res = "";
    
    for(let j = newArray.length - 1  ; j >= 0; j--){
        res += newArray[j] + " ";

   }

   console.log(res)
}
solve(3, [10, 20, 30, 40, 50])