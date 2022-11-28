// JS 같은 경우 모든 숫자의 형태를 허용함
let integer = 10;
let hex = 0xa;
let binary = 0b1010;
let octal = 0o12;

console.log(integer, hex, binary, octal);

let negative = -10;
let indice = 1.0e1;
let double = 10.12;

console.log(negative, indice, double)

// 말도 안 되는 값
let IsInfinity = 10/0;
let IsNaN = 10/ '칠';

console.log(IsInfinity, IsNaN)

// error
let sum = 0.1 + 0.2; // 근사치 결과값이 나옴
console.log(sum)



