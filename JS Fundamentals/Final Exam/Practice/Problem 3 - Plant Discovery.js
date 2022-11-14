function solve(input){

    let numberOfPlants = Number(input.shift());
    let herber = {};

    for(let i = 0; i < numberOfPlants; i++){
        let tokens = input.shift().split("<->");
        let plant = tokens[0];
        let rarity = tokens[1];

        herber[plant] = {
            rarity
        }
    }
    

    while(input[0] !== "Exhibition"){
        let tokens = input.shift().split(": ")
        let command = tokens[0];
        tokens = tokens[1].split(" - ")
        let p1 = tokens[0];
        let p2 = tokens[1];

        if(command === "Rate"){
            
        }
    }

}solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
