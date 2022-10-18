function suppliesForSchool(input){

let paketHimikali = Number(input[0]);
let paketMarkeri = Number(input[1]);
let preparatZaLitur = Number(input[2]);
let procentNamalenie = Number(input[3]/100);

let cenaHimikali = paketHimikali * 5.80;
let cenaMarkeri = paketMarkeri * 7.20 ;
let ceenaPreparati = preparatZaLitur * 1.20;
let cenaSum = cenaHimikali + cenaMarkeri + ceenaPreparati;
let cenaNamlaenie = cenaSum - (cenaSum * procentNamalenie)

console.log(cenaNamlaenie)

}

suppliesForSchool(["2","3","4","25"])