function fishTank(input){

let lenght = Number(input[0]);
let width = Number(input[1]);
let hight = Number(input[2]);
let percent = Number(input[3]);

let obemAkv = (lenght * width * hight) * 0.001;
let res = obemAkv * (percent / 100);
let totalObem = obemAkv - res;

console.log(totalObem)
}

fishTank(["85 ",
"75 ",
"47 ",
"17 "])
