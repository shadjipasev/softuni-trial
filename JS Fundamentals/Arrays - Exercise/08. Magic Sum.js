function magicSum(arry,specialNum) {

    for (let i = 0; i < arry.length; i++) {
        let specialSeq = [];
        for (let j = i; j < arry.length; j++) {
            let sum = arry[i] + arry[j];
            if (sum == specialNum && i !== j) {
                specialSeq.push(arry[i],arry[j])
                console.log(specialSeq.join(" "));
            }
        }
        
    }


} magicSum([1, 2, 3, 4, 5, 6],6)