function guineaPig(input) {

    let foodInGrams = Number(input[0]) * 1000;
    let hayInGrams = Number(input[1]) * 1000;
    let coverInGrams = Number(input[2]) * 1000;
    let weightInGrams = Number(input[3]) * 1000;

    let day = 1;

    let foodLeft = foodInGrams;
    let hayLeft = hayInGrams;
    let coverLeft = coverInGrams;
    let isFine = true;

    while (day <= 30) {
        
        

        foodLeft -= 300;

        
        if (day % 2 === 0) {
            hayLeft -= foodLeft * 0.05;
        }
        
        if (day % 3 === 0) {
            coverLeft -= (weightInGrams / 3);

        }

        day++;

        
    }

    if (foodLeft <= 0 || hayLeft <= 0 || coverLeft <= 0) {
        isFine = false;
    }
    

    let foodExcess = foodLeft / 1000;
    let hayExcess = hayLeft / 1000;
    let coverExcess =  coverLeft / 1000 ;

    


    if(isFine){
        console.log(`Everything is fine! Puppy is happy! Food: ${foodExcess.toFixed(2)}, Hay: ${hayExcess.toFixed(2)}, Cover: ${coverExcess.toFixed(2)}.`);
    }
    if(!isFine){
        console.log("Merry must go to the pet store!");
    }




} guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])


