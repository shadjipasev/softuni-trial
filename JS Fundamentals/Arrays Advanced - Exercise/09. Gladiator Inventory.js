function gladiatorInventory(commands){

    let currentInventory = commands.shift().split(" ");
    
    for(let command of commands){
        let tokens = command.split(" ");
        let currentCommand = tokens[0];
        

        if(currentCommand === "Buy"){
            let currentElement = tokens[1];
            if(!currentInventory.includes(currentElement)){
                currentInventory.push(currentElement)
            }
            
        }else if(currentCommand === "Trash"){
            let currentElement = tokens[1];
            if(currentInventory.includes(currentElement)){
                let indexOfEle = currentInventory.indexOf(currentElement);
                currentInventory.splice(indexOfEle,1)
            }
            
        } else if(currentCommand === "Repair"){
            let currentElement = tokens[1];
            if(currentInventory.includes(currentElement)){
                let indexOfEle = currentInventory.indexOf(currentElement);
                let element = currentInventory.splice(indexOfEle,1);
                currentInventory.push(element);
            }

        } else if(currentCommand === "Upgrade"){
            let element = tokens[1].split("-");
            let currentElement = element[0];
            let upgrade = element[1];
            console.log(element)
            let result = [];
            
            if(currentInventory.includes(currentElement)){

                let indexOfEle = currentInventory.indexOf(currentElement);
                result.push(`${currentElement}:${upgrade}`);
                currentInventory.splice(indexOfEle + 1, 0, ...result)
                
            }
        }
    }
    
    console.log(currentInventory.join(" "))


}gladiatorInventory(['SWORD Shield Spear',
/* 'Buy Bag',
'Trash Shield',
'Repair Spear', */
'Upgrade SWORD-Steel']
)