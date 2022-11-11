function solve(currentStock, orderedStock) {

    let res = {};

    for (let i = 0; i < currentStock.length; i += 2) {

        let nameOfProduct = currentStock[i];

        res[nameOfProduct] = Number(currentStock[i + 1])

    }

    for (let z = 0; z < orderedStock.length; z += 2){
       let nameOfProduct = orderedStock[z];

       if(!res.hasOwnProperty(nameOfProduct)){
          res[nameOfProduct] = 0;
       }

       res[nameOfProduct] += Number(orderedStock[z +1]);

    }

    for(let nameOfProduct in res){
       console.log(`${nameOfProduct} -> ${res.nameOfProduct}`) 
    }

} solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
