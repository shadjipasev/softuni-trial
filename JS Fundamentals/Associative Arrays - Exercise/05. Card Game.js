function cardGame(input){

    let suit = {
        "1": 10,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }

    let face = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }


    let result = {};

    for(let info of input){
        let [player, cards] = info.split(": ");
        cards = cards.split(", ");

        if(result.hasOwnProperty(player) === false){
            result[player] = new Set();
        }

        for(let card of cards){
            result[player].add(card);
        }
       
    }

    for(let [name, cards] of Object.entries(result)){

        let power = 0;
      /*  console.log(name);
       console.log(cards); */
       /* cards = Array.from(cards); */
       for(let card of cards){
           /* console.log(card); */
           let suitPower = suit[card[0]];
           let facePower = face[card.slice(-1)];
           power += suitPower * facePower;
           
       }

       console.log(`${name}: ${power}`)

    

    }


  /*   console.log(result) */

}cardGame([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD']) 