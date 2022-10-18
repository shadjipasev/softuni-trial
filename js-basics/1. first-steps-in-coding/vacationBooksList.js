function vacationBooks(input){

    let bookSheets = Number(input[0]);
    let sheetsRed = Number(input[1]);
    let days = Number(input[2]);

    let timeRed = bookSheets / sheetsRed;
    let NeededHours = timeRed / days;

    console.log(NeededHours)
}
   vacationBooks(["212","20",
    "2"])