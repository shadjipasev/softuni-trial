function solve(num) {

   num = num.toString()
   let sumOfDigits = 0;

   for(let i = 0;i <= num.length;i++){
      let currentNum = Number(num.charAt(i));
      sumOfDigits += currentNum;
      
   }
    sumOfDigits = sumOfDigits.toString()
    if(sumOfDigits.includes("9")){
        console.log(`${num} Amazing? True`)
    }else{
        console.log(`${num} Amazing? False`) 
    }
}
solve(1233)
solve(999)

