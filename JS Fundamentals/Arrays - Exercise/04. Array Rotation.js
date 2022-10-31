function solve(arry,rotations){

    let outputArry = [];

for(let i = 0;i < rotations;i++){

    let currentNum = arry.shift();
    arry.push(currentNum);

}
console.log(arry.join(" "))


}solve([51, 47, 32, 61, 21], 2)