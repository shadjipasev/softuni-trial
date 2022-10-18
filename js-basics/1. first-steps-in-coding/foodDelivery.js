function foodDelivery(input){

    let chickenMeal = Number(input[0]);
    let fishMeal = Number(input[1]);
    let veggieMeal = Number(input[2]);

    let chickenMealPrice = chickenMeal * 10.35;
    let fishMealPrice = fishMeal * 12.40;
    let veggieMealPrice = veggieMeal * 8.15;
    
    let mealPrice = chickenMealPrice + fishMealPrice + veggieMealPrice;
    let desert = mealPrice * 0.20;
    let delivery = 2.50;
    let totalPrice = mealPrice + desert + delivery;

console.log(totalPrice);
    
}

foodDelivery (["2","4","3"])
