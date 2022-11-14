function sovle(input){

let text = input.shift();
let pattern = /(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g

let match = pattern.exec(text);

let ress = [];
let sumRess = [];


while(match !== null){

    let word = match.groups.word;
    console.log(word)
    let sumWord = word.split("");
    ress.push(word)
    
    
    match = pattern.exec(text);
   

}

for(let line of ress){
    let currentWord = line.split("")
    let sumOfEmoji = 0;
    for(let part of currentWord){
        let oneLetter = part.charCodeAt();
        sumOfEmoji += oneLetter;  
        
    }

}





}sovle(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])