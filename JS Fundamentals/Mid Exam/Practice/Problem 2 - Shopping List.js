function shoppingList(commands) {

    let listOfProducts = commands.shift().split("!")

    for (let command of commands) {

        let tokens = command.split(" ");
        let currentCommand = tokens[0];

        if (currentCommand === "Urgent") {
            let currentElement = tokens[1];

            if (!listOfProducts.includes(currentElement)) {
                listOfProducts.unshift(currentElement);
            } 
            

        } else if (currentCommand === "Unnecessary") {

            let currentElement = tokens[1];
            let indexOfEle = listOfProducts.indexOf(currentElement);
            if (listOfProducts.includes(currentElement) && indexOfEle !== -1) {
                listOfProducts.splice(indexOfEle, 1)

            } 


        } else if (currentCommand === "Correct"){
                
            let oldItem = tokens[1];
            let newItem = tokens[2];
            let indexOfEle = listOfProducts.indexOf(oldItem);
            if (listOfProducts.includes(oldItem) && indexOfEle !== -1) {
                listOfProducts.splice(indexOfEle, 1,newItem)
            }
              

        } else if(currentCommand === "Rearrange" ){

            let currentElement = tokens[1];
            let indexOfEle = listOfProducts.indexOf(currentElement);

            if (listOfProducts.includes(currentElement)) {

               listOfProducts.splice(indexOfEle,1)
               listOfProducts.push(currentElement)
                
                
            }

            
        } else if (currentCommand === "Go Shopping!"){
            break;
        }

    }

    console.log(listOfProducts.join(", "))


} shoppingList(["Milk!Pepper!Grapes!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Lime",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

