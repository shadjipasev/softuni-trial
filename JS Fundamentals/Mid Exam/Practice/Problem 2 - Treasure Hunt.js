function treasureHunt(commands) {

    let treasureChest = commands.shift().split("|");

    for (let command of commands) {
        let tokens = command.split(" ");
        let currentCommnad = tokens[0];

        if (currentCommnad === "Loot") {

            for (let i = 1; i < tokens.length; i++) {

                let currentElement = tokens[i];

                if (!treasureChest.includes(currentElement)) {
                    treasureChest.unshift(currentElement)
                }

            }
            
        } else if (currentCommnad === "Drop") {
            let currentElement = Number(tokens[1]);
            let ele = treasureChest[currentElement];
            let indexOfEle = treasureChest.indexOf(ele);

            if (indexOfEle !== -1) {
                treasureChest.splice(indexOfEle, 1)
                treasureChest.push(ele)
            }
           
        } else if (currentCommnad === "Steal") {

            let currentEle = Number(tokens[1]);
            let elementsFromTheBack = treasureChest.length - currentEle
            let stolenItems = [];



            for (let i = treasureChest.length - 1; i >= elementsFromTheBack; i--) {
                let currentItem = treasureChest.pop(treasureChest[i]);
                stolenItems.unshift(currentItem)
            }
            
            console.log(stolenItems.join(", "))
            
        } else if (currentCommnad === "Yohoho!") {
            break;
        }



    }
    let sum = 0;
    for (let items of treasureChest) {
        sum += items.length;
    }

    let avrgTreasureGain = sum / treasureChest.length


    if (treasureChest.length = 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${avrgTreasureGain.toFixed(2)} pirate credits.`)
    }

} treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
