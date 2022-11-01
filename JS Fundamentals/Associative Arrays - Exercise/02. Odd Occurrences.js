function solve(input){

    let words = input.split(" ");
    let res = {};

    for(let word of words){
        word = word.toLocaleLowerCase();
        if(res.hasOwnProperty(word)){
            res[word]++
        } else {
            res[word] = 1;
        }
    }

    let finalResult = [];

    for(let word in res){
        if(res[word] % 2 == 1){
            finalResult.push(word)
        }
    }

   console.log(finalResult.join(" "))

}solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')