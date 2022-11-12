function solve(input){

   let totalIncome = 0;

    for(let line of input){
        let regEx = /%(?<name>[A-Z][a-z]+)%[^$%|.]*<(?<product>[\w]+)>[^$%|.]*\|(?<count>[\d]+)\|[^$%|.]*(?<price>[\d+][.]?[\d]+)\$/gm
         if(line !== 'end of shift'){ 
            let patt = regEx.exec(line);
            let customerName = patt.groups.name;
            let product = patt.groups.product;
            let totalPrice = Number(patt.groups.count) * Number(patt.groups.price);
            totalIncome += totalPrice;
            console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`)
        } 
        
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)

}solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])
solve(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])