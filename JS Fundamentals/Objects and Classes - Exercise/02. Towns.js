function town(input){

    let res = {};

    for(let tokens of input){
       let info = tokens.split(" | ");
       let town = info[0];
       let latitude = Number(info[1]).toFixed(2);
       let longitude = Number(info[2]).toFixed(2);

       res.town = town;
       res.latitude = latitude;
       res.longitude = longitude;

       console.log(res)

    }


}town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)