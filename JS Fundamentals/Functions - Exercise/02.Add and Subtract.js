function addAndSubstract(num1, num2, num3) {

    function sum(number1, number2) {
        return number1 + number2
    }
    
    let substract = (nishto, neRazbiram) => nishto - neRazbiram;
    let add = sum(num1, num2);
    let res = substract(add, num3);

    console.log(res)
    



} addAndSubstract(23, 6, 10)