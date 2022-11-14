function solve(input) {
  let word = input.shift();

  for (let line of input) {
    let tokens = line.split(":|:");
    let command = tokens[0];

    if (command === "ChangeAll") {
      let letter = tokens[1];
      let replacement = tokens[2];
     word = word.split(letter);
     word = word.join(replacement)
     console.log(word)
    } else if(command === "Reverse"){
      let message = tokens[1];
      let indexOfMessage = word.indexOf(message);
      if(indexOfMessage !== -1){
        let firstHalf = word.substring(0,indexOfMessage);
        let secondHalf = word.substring(index + message.length);
        secondHalf = secondHalf.split("").reverse().join("");
        word = firstHalf + secondHalf
        console.log(word)
      }else{
        console.log("error")
        console.log(word)
      }
      
      
    } else if(command === "InsertSpace"){
      let index = tokens[1];
      let firstHalf = word.substring(0,index);
      let secondHalf = word.substring(index);

      word = firstHalf + " " + secondHalf;
      console.log(word)
    } else if(command === "Reveal"){
      break;
    }

  }
  console.log(`You have a new text message: ${word}`);

}

solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

console.log("---")


solve(["Howare?uoy","Hiware?uiy",
  "ChangeAll:|:i:|:o",
 " Reverse:|:?uoy",
  'Reverse:|:jd',
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal"])