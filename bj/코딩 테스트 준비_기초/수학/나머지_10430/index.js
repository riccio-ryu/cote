// 2024
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((a) => parseInt(a));

const [A, B, C] = input;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);

//2023
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// const A = parseInt(input[0]);
// const B = parseInt(input[1]);
// const C = parseInt(input[2]);

// console.log((A+B)%C);
// console.log(((A%C)+(B%C))%C);
// console.log((A*B)%C);
// console.log(((A%C) * (B%C))%C);
