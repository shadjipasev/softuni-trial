function painting(input){

let nailon = Number(input[0]);
let paint = Number(input[1]);
let razreditel = Number(input[2]);
let hours = Number(input[3]);

let nailonSum = nailon + 2;
let paintSum = paint * 1.10;
let price = nailonSum * 1.50 + paintSum * 14.50 + razreditel * 5 + 0.40;

let workForOneHour = price * 0.30;
let workersPayment = workForOneHour * hours

let totalSum = price + workersPayment

console.log(totalSum)

}

painting(['10','11','4','8'])