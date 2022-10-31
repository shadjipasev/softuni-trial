function sorting(numbers) {

    let res = [];

    while (numbers.length > 0) {
        let currentBiggestNum = res.push(numbers.sort((a, b) => -b - a).shift())
        let currentLowestNum = res.push(numbers.sort((a, b) => a - b).shift())

    }

    console.log(res.join(" "))

} sorting([34,
2,
32,
45,
690,
6,
32,7,19,47])