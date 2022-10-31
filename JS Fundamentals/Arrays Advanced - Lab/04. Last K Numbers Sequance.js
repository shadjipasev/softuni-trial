function fibonacciSeq(sequenceLength, num) {

    let res = [1];
    
    for (let i = 1; i <= sequenceLength - 1; i++) {
        let seq = res.slice(-num)
        let sum = 0;
        for (let j = 0; j < seq.length; j++) {
            sum += seq[j];
            
        }
        res.push(sum)
    }

    console.log(res.join(" "))


} fibonacciSeq(6, 3)