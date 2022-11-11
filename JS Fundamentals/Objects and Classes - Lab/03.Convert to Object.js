function convert(obj){

    let text = JSON.parse(obj);

    for (let texts of Object.keys(text)){
        console.log(`${texts} : ${text[texts]}`)
    }

    

}convert('{"name": "George", "age": 40, "town": "Sofia"}')