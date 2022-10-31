function solve(arryOne,arryTwo){

let newArry = [];

for(let i = 0; i < arryOne.length; i++){

    if(i % 2 === 0){
        newArry.push(Number(arryOne[i]) + Number(arryTwo[i]))
    }else{
        newArry.push(`${arryOne[i]}${arryTwo[i]}`)
    }
}
console.log(newArry.join(" - "));


}solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)