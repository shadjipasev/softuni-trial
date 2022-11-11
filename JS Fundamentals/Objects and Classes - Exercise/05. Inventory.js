function solve(input){

    let heroes = [];

    for(let element of input){
        let token = element.split(" / ");
        let name = token[0];
        let level = token [1];
        let items = token[2].split(", ").join(", ");

        let currentHero = {
            name,
            level,
            items,
        }

        heroes.push(currentHero)
    }

    heroes.sort((a,b) => a.level - b.level);

    for(ele of heroes){
        console.log(`Hero: ${ele.name}`)
        console.log(`level => ${ele.level}`)
        console.log(`items => ${ele.items}`)
    }

}solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])