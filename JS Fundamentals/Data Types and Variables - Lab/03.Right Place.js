function place(string,char,result){

    for(let i = 0;i <= string.length; i++){
        if(string.charAt(i) === "_"){
            let res = string.replace("_",char)
            if(res !== result){
                console.log("Not Matched")
            }else{
                console.log("Matched")
            }
        }
    }
}
place('Str_ng', 'i', 'String')