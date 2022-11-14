function solve(input) {
  let pattern =
    /(\||#)(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
  let text = input.shift();
  
  let match = pattern.exec(text);

  if(match === null){
    console.log(`You have food to last you for: 0 days!`);
  }

  let sumOfCalories = 0;
  while (match !== null) {
   let calories = Number(match.groups.calories);  
    sumOfCalories += calories;   
    match = pattern.exec(text);
  }
  let daysSurvive = Math.floor(sumOfCalories / 2000);
  console.log(`You have food to last you for: ${daysSurvive} days!`);
  let swatch = pattern.exec(text);
  while (swatch !== null){
    let food = swatch.groups.food;
    let date = swatch.groups.date;
    let caloriesFinal = Number(swatch.groups.calories);
    console.log(`Item: ${food}, Best before: ${date}, Nutrition: ${caloriesFinal}`);
    swatch = pattern.exec(text);
  }

  
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

console.log("----")
solve(["$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|"])
