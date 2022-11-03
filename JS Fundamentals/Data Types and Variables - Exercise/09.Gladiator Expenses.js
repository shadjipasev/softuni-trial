function solve(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice) {



    let sumNeeded = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            sumNeeded += helmetPrice;
        }
        if (i % 3 === 0) {
            sumNeeded += swordPrice;
        }
        if (i % 6 === 0) {
            sumNeeded += shieldPrice;
        }
        if (i % 12 === 0) {
            sumNeeded += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${sumNeeded.toFixed(2)} aureus`);


}solve(7,
    2,
    3,
    4,
    5
    )
