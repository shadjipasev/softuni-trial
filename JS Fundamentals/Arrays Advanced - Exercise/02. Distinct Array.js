function uniqueArry(numbers) {

    let res = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentElement = Number(numbers[i]);
        if(!res.includes(currentElement)){
            res.push(numbers[i])
        }
    }

    console.log(res.join(" "))

} uniqueArry([1, 2, 3, 4])
uniqueArry([7, 8, 9, 7, 2, 3, 4, 1, 2])