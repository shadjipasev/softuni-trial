function bonusScore(input) {

    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let extraBonus = Number(input.shift());





    input.sort((a, b) => a - b);


    let biggest = input.pop();
    console.log(biggest)

    let maxBonus = Math.ceil((biggest / lectures) * (lectures / students + extraBonus));

    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${biggest} lectures.`)




} bonusScore(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScore([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
)