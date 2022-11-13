function solve(input){
    let res = "";
    let finalRes = []

    for(let el of input){
       if(el == el.toLowerCase()){
       res+=el;
    }else{
       finalRes.push(res);
       res = "";
       res += el;
    }
    }

    finalRes.push(res);
    let mamicatati = finalRes.shift()
     
    console.log(finalRes.join(", "))
    

}solve('SplitMeIfYouCanHaHaYouCantOrYouCan')