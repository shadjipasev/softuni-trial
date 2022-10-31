function plusOrMinus(arry) {

    let res = [];

    for (let i = 0; i < arry.length; i++) {
        let currentNum = Number(arry[i]);
        if (currentNum < 0) {
            res.unshift(currentNum);
        } else {
            res.push(currentNum);
        }
    }

    console.log(res.join("\n"));

} plusOrMinus(['7', '-2', '8', '9'])
plusOrMinus(['3', '-2', '0', '-1'])
