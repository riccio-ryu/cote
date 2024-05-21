// 2024
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [e, s, m] = input;
let x = 1;
while (true) {
  if ((x - e) % 15 === 0 && (x - s) % 28 === 0 && (x - m) % 19 === 0) {
    console.log(x);
    break;
  }
  x++;
}
// 메모리 초과... node론 풀수가 없단다...


// 2023
const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);

let esm = (e,s,m) => {
    let x = 0;
    while (true) {
        if(x%15 === e - 1 && x%28 === s - 1 && x%19 === m - 1) break;
        x++;
    }
    return console.log(++x);
}

esm(input[0],input[1],input[2]);

//메모리 초과
