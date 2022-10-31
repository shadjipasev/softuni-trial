function houseParty(guests) {

    let list = [];

    for (let guest of guests) {
        let currentGuest = guest.split(" ");
        let guestName = currentGuest[0];
        if (currentGuest.length === 3) {
            if (list.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                list.push(guestName);
            }
        } else {
            let indexOfPerson = list.indexOf(guestName);
            if(indexOfPerson !== -1){
                list.splice(indexOfPerson,1)
            }else{
                console.log(`${guestName} is not in the list!`)
            }
        }



    }

    console.log(list.join("\n"))


} houseParty(['Allie is going!',
'George is going!',
'Stefi is not going!',
'George is not going!']

)