function operationsBetweenNumbers(input){

    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let equals = 0


    if (operator === "+"){
        equals = N1 + N2
        if (equals % 2 === 0){
            console.log(`${N1} + ${N2} = ${equals} - even`)
        }else{ 
            console.log(`${N1} + ${N2} = ${equals} - odd`)

        }
    }else if (operator === "-"){
        equals = N1 - N2
        if (equals % 2 === 0){
            console.log(`${N1} - ${N2} = ${equals} - even`)
        }else{ 
            console.log(`${N1} - ${N2} = ${equals} - odd`)
        }
    }else if (operator === "*"){
        equals = N1 * N2
        if (equals % 2 === 0){
            console.log(`${N1} * ${N2} = ${equals} - even`)
        }else{ 
            console.log(`${N1} * ${N2} = ${equals} - odd`)
        }
    }else if (operator === "/"){
        equals = N1 / N2
        if (N2 === 0){
            console.log(`Cannot divide ${N1} by zero`)
        }else{
            console.log(`${N1} / ${N2} = ${equals.toFixed(2)}`)
        }
        
    }else if (operator === "%"){
        equals = N1 % N2
        if (N2 === 0){
            console.log(`Cannot divide ${N1} by zero`)
        }else{ 
            console.log(`${N1} % ${N2} = ${equals}`)
        }
    }                           
    
     
}operationsBetweenNumbers(["4",
"7",
"/"])




