function solve(input){
    
    let index = input.lastIndexOf("\\");
    let fileName = input.substring(index + 1).split(".");
    if(fileName.length > 2){
        console.log(`File name: ${fileName[0]}.${fileName[1]}`)
        console.log(`File extension: ${fileName[fileName.length-1]}`)
    }else{
        console.log(`File name: ${fileName[0]}`)
        console.log(`File extension: ${fileName[fileName.length-1]}`)
    }
    

}solve('C:\\Internal\\training-internal\\Template.bak.pptx')
