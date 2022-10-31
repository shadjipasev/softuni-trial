function kNumbers(arry) {

    let kNUm = arry[0];

    let firstRes = arry.slice(1,kNUm + 1);
    let secondRes = arry.slice(-kNUm);

    console.log(firstRes.join(" "));
    console.log(secondRes.join(" "));
    


} kNumbers([2, 7, 8, 9])
kNumbers([3, 6, 7, 8, 9])