function solve(word,text) {

    word = word.toLowerCase();
    text = text.toLowerCase();
    let sentenceAsArry = text.split(" ");

    if(sentenceAsArry.includes(word)){
        console.log(word);
    }else{
        console.log(`${word} not found!`)
    }

}
solve('python',
'JavaScript is the best programming language'
);
