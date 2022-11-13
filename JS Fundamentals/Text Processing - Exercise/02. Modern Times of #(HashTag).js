function solve(input){

    input = input.split(" ")


    res = [];
    for(let word of input){
        if(word.startsWith("#") && word.length > 1){
            res.push(word.substring(1))
        }
    }

    let finalRes = []
    for(let word of res){
        let flag = true;

        for(let i = 0; i < word.length; i++){
            let wordCode = word[i].charCodeAt();
            if(wordCode < 64 || wordCode > 91 || 
                wordCode < 96 || wordCode > 123){
               flag == false;
            }
        }
        if(flag){
            console.log(word)
        }
        
    }

    

    /* for(let el of res){
        let elCode = array.el.charCodeAt(0)
        console.log(elCode)
    } */


}solve('Nowadays everyone uses # to tag a #special word in #socialMedia')