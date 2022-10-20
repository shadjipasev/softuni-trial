function cinemaNew(input){

    let type = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    let sum = 0;

    if (type === "Premiere"){
        sum = row * column * 12;
    }else if(type === "Normal"){
        sum = row * column * 7.50;
    }else{
        sum = row * column * 5;
    }
console.log(`${sum.toFixed(2)} leva`)

}cinemaNew(["Discount",
"12",
"30"])


