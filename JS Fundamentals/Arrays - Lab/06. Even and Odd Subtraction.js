function diffOfEvenAndOdd(arry) {

let sumOfEven = 0;
let sumOfOdd = 0;

for(let i = 0;i < arry.length; i++){
    if(arry[i] % 2 === 0){
        sumOfEven += arry[i];
    }else{
        sumOfOdd += arry[i];
    }
    
}
console.log(sumOfEven - sumOfOdd)

} diffOfEvenAndOdd([1, 2, 3, 4, 5, 6])