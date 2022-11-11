function battleShips(attacks) {

    let pirateShip = attacks.shift().split(">").map(Number);
    let warShip = attacks.shift().split(">").map(Number);
    let maxHealthCapacity = attacks.shift()

    let isNotBroken = true;
    


    for (let attack of attacks) {
        let tokens = attack.split(" ");
        let currentAttack = tokens[0];

        if (currentAttack === "Fire") {
            let currentSegment = Number(tokens[1]);
            let currentDmg = Number(tokens[2]);
            let indexOfEle = warShip.indexOf(warShip[currentSegment])

            if (indexOfEle !== -1) {
                let demageDone = warShip[currentSegment] - currentDmg;
                warShip.splice(currentSegment, 1, demageDone);
                if (demageDone <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    isNotBroken = false;
                    break;
                }
            }

            
        } else if (currentAttack === "Defend") {

            let startingAttack = pirateShip[tokens[1]];
            let endAttack = pirateShip[tokens[2]];
            let dmg = Number(tokens[3]);

            let indexOfStart = pirateShip.indexOf(startingAttack);
            let indexOfEnd = pirateShip.indexOf(endAttack);
            

            let stopIndex = (indexOfEnd - indexOfStart) + 1;

            if (indexOfStart !== -1 && indexOfEnd !== -1) {
                let attackedSection = pirateShip.slice(indexOfStart, indexOfEnd + 1);
                let dmgdSection = []

                for (let i = 0; i < attackedSection.length; i++) {
                    let currentEl = attackedSection[i];
                    let dmgdEl = currentEl - dmg
                    if(dmgdEl <= 0){
                        console.log("You lost! The pirate ship has sunken.")
                        isNotBroken = false;
                        break;
                    }
                    dmgdSection.push(dmgdEl);

                }

                pirateShip.splice(indexOfStart, stopIndex, ...dmgdSection)
                

            }

        } else if (currentAttack === "Repair") {

            let currentSection = pirateShip[tokens[1]];
            let indexOfSection = pirateShip.indexOf(currentSection);
            let healing = Number(tokens[2])
            

            if (indexOfSection !== -1) {
                let healthGain = currentSection + healing;
                if (healthGain > maxHealthCapacity) {
                    healthGain = maxHealthCapacity;
                }
                pirateShip.splice(indexOfSection, 1, healthGain);
                
            }



        } else if (currentAttack === "Status"){
            let count = 0;

            for(let section of pirateShip){
                let percentSection = (section / maxHealthCapacity) * 100  
               if(percentSection < 20){
                   count++
               }
            }
            
            console.log(`${count} sections need repair.`)
             
        } else if (currentAttack === "Retire"){
            break;
        }
    }

    let warShipSum = 0;
    let pirateShipSum = 0;

    

    if(isNotBroken){

        for(let num of warShip){
            warShipSum += num;
        } 
        for(let zum of pirateShip){
            pirateShipSum += zum; 
        }
        console.log(`Pirate ship status: ${pirateShipSum}`)
        console.log(`Warship status: ${warShipSum}`)
    }


} battleShips(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

