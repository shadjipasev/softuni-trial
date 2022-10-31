function bombNum(arry, bombs) {
    
    let bombNum = Number(bombs[0]);
    let blastWave = Number(bombs[1]);

    let indexOfBomb = arry.indexOf(bombNum);
    let detonation = blastWave * 2 + 1;
    
    

while(indexOfBomb !== -1){
        
    let startExplosion = Math.max(0, indexOfBomb - blastWave)
        arry.splice(startExplosion, detonation)
        indexOfBomb = arry.indexOf(bombNum)
    
}
 
    let sum = 0;
    for (let num of arry) {
        sum += num
    }

    console.log(sum)



} bombNum([1, 3, 2, 1, 3, 1, 2, 1, 1, 1]
    ,[3, 1])