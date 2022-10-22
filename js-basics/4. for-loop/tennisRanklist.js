function tennisRanklist(input){
    let index = 0
    let tournaments = Number(input[index]);
    index++;
    let basePoints = Number(input[index]);
    index++;

    let points = 0
    let countWin = 0

    for(let i = 0; i < tournaments; i++){
        let stage = input[index];
        index++
        switch(stage){
            case "W": 
            points += 2000;
            countWin++
            break;
            case "F": points += 1200;break;
            case "SF": points += 720;break;
        } 
    } 
      let finalPoints = points + basePoints;
      let avrgPoints = points / tournaments;
      let win = countWin / tournaments * 100;

      console.log(`Final points: ${finalPoints}`);
      console.log(`Average points: ${Math.floor(avrgPoints)}`);
      console.log(`${win.toFixed(2)}%`)



}tennisRanklist (["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
