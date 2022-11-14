function solve(input){

    let text = input.shift();

    for(let line of input){
        let tokens = line.split(":");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if(command === "Add Stop"){
            if(p1 >= 0 && p1 < text.length){
            let firstHalf = text.substring(0,p1);
            let secondHalf = text.substring(p1);
            text = firstHalf + p2 + secondHalf;
            console.log(text)
            }else{
                console.log(text)  
            }
        }else if (command === "Remove Stop"){
            if(p1 >= 0 && p1 < text.length && p2 >= 0 && p2 < text.length ){
            let firstHalf = text.substring(0,p1)
            let secondHalf = text.substring(Number(p2)+1);
            text = firstHalf + secondHalf
            console.log(text)
            }else{
                console.log(text)  
            }
        } else if (command === "Switch"){
            
            if(text.includes(p1) === true){
                text = text.replace(p1,p2);
                console.log(text)
            }else{
                console.log(text)
            }
            
        
            
        }else if(command === "Travel"){
            break;
        }

    }

    console.log(`Ready for world tour! Planned stops: ${text}`)


}/* solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]) */

solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])