function solve(input) {
  let message = input.shift();

  for (let line of input) {
    let tokens = line.split("|");
    let command = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];

    if (command === "ChangeAll") {
      message = message.split(p1).join(p2);
      
    } else if (command === "Insert") {
      let firstHalf = message.substring(0, Number(p1));
      let secondHalf = message.substring(Number(p1));
      message = firstHalf + p2 + secondHalf;

    }else if(command === "Move"){
        let firstHalf = message.substring(0,p1);
        let secondHalf = message.substring(p1);
        message = secondHalf + firstHalf;

    }else if(command === "Decode"){
        break;
    }
    
  }

  console.log(`The decrypted message is: ${message}`)
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
