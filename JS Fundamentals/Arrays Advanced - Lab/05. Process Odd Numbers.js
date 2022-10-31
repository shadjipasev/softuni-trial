function oddNum(arry) {


    console.log(arry.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse().join(" "))

} oddNum([10, 15, 20, 25])