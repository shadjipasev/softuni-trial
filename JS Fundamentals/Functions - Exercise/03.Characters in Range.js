function charactersInRange(firstChar,lastChar){
    
    let firstCharInNum = firstChar.charCodeAt(0);
    let lastCharInNum = lastChar.charCodeAt(0);
    let res = [];

    for(let i = firstCharInNum + 1; i < lastCharInNum; i++){
       res.push(String.fromCharCode(i));
    }
    

    console.log(res.join(" "))


}charactersInRange('#',':')