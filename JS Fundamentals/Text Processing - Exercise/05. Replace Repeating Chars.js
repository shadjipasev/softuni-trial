function solve(input){

    let res = "";

    for(let el of input){
        if(el !== res[res.length-1]){
           res+=el
        }
    }

    console.log(res)


}solve('aaaaabbbbbcdddeeeedssaa')