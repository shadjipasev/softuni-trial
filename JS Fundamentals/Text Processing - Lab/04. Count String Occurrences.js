function solve(text,word){

    word = ` ${word} `
    text = ` ${text} `
    let counter = 0;
    


    while(text.includes(word)){
        counter++;
        text = text.replace(word, "*");
        
    }

    console.log(counter)



}solve('This is a word and it also is a sentence',
'is')