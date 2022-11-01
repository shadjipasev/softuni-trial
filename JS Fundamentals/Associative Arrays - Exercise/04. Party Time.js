function partyy(input) {
    let vipList = new Set();
    let regularList = new Set();

    while(input[0] != "PARTY"){
        let currentGuest = input.shift();
        if(Number.isNaN(Number(currentGuest[0])) === true){
           regularList.add(currentGuest);
        }else{
            vipList.add(currentGuest)
        }
        
    }

    let command = input.shift();

    for(let attended of input){
        if(regularList.has(attended) || vipList.has(attended)){
            regularList.delete(attended);
            vipList.delete(attended)
        }
    }

    console.log(regularList.size + vipList.size);
    
    for(let guest of vipList){
        console.log(guest);
    }

    for(let guest of regularList){
        console.log(guest)
    }

}

partyy([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",]);

  console.log("-----")

partyy(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'])