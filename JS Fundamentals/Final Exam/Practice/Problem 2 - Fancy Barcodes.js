function solve(input){
let pattern = /@#+(([A-Z][A-Za-z\d]{4,})[A-Z])@#+/
let sumOfBar = input.shift();

for(let line of input){

   let match = pattern.exec(line);
   let productGroup = "";

   
   if(match === null){
       console.log("Invalid barcode")
   }else {
       let product = match[2];
       product = product.split("");

       for(el of product){
           if(el.charCodeAt() > 47 && el.charCodeAt() < 58){
               productGroup += el;
           }
       }
       if(productGroup.length == 0){
        productGroup = "00"
    }

    console.log(`Product group: ${productGroup}`)
    }
    
       
    
   }
   
    

}solve(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);

console.log("----")

solve(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
