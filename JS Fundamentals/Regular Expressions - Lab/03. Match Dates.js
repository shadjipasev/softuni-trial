function solve(input){

let patt = /(?<day>\d{2})(.|-|\/)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;


while((res = patt.exec(input)) !== null){

    let days = res.groups.day;
    let months = res.groups.month;
    let years = res.groups.year;
    
    console.log(`Day: ${days}, Month: ${months}, Year: ${years}`);
}



}solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")