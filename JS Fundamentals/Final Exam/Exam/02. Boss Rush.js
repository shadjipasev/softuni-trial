function solve(input){

let numOfInput = input.shift();
let regExp = /\|(?<boss>[A-Z]+)\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g



for(let line of input){


    let match = regExp.exec(line);
    let bossName = match.groups.boss;
    let title = match.groups.title;
    console.log(line)
/* 
    if(match !== null){
        console.log(`${bossName}, The ${title}`);
        console.log(`Strength: ${bossName.length}`);
        console.log(`Armor: ${title.length}`)
    } else {
        console.log("Access denied!")
    } */
    

}



}solve(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])

