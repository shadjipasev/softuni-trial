function space(input) {

    let commands = input.shift().split("||");
    let fuel = Number(input[0]);
    let ammo = Number(input[1]);

    /* console.log(fuel)
    console.log(ammo) */

    

    for(let command of commands){
        let tokens = command.split(" ");
        let currentCommand = tokens[0];
        let elementNum = Number(tokens[1]);

        if(currentCommand === "Travel"){
            if(elementNum > fuel){
                console.log("Mission failed.");
                break;
            }else{
                console.log(`The spaceship travelled ${elementNum} light-years.`)
                fuel -= elementNum;
            }
            /* console.log(fuel) */

        }else if(currentCommand === "Enemy"){
            if(elementNum > ammo){
                fuel -= elementNum * 2;
                if(fuel > 0){
                    console.log(`An enemy with ${elementNum} armour is outmaneuvered.`)
                } else {
                    console.log(`Mission failed.`);
                    break;
                }
            }else if(elementNum <= ammo){
                console.log(`An enemy with ${elementNum} armour is defeated.`);
                ammo -= elementNum;
            }

            
        } else  if(currentCommand === "Repair"){
            let ammunitionAdded = elementNum * 2;
            let fuelAdded = elementNum;
            ammo += ammunitionAdded;
            fuel += fuelAdded
            console.log(`Ammunitions added: ${ammunitionAdded}.`);
            console.log(`Fuel added: ${fuelAdded}.`)

        } else  if(currentCommand === "Titan"){
            console.log("You have reached Titan, all passengers are safe.");
            break;
        }
         
        
    }




} space(['Travel 10||Enemy 30||Repair 15||Titan','50','80'])