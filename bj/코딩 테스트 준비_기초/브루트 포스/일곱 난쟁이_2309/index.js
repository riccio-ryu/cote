// 2024
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = input.reduce((acc, cur) => acc + cur);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - input[i] - input[j] === 100) {
      const k = input
        .filter((f) => f !== input[i] && f !== input[j])
        .sort((a, b) => a - b);
      return console.log(k.join("\n"));
    }
  }
}


//2023
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number);

let sum = input.reduce((acc, cur) => acc + cur)

for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if(sum - input[i] - input[j] === 100){
            let f = input.filter(k => k !== input[i] && k !== input[j])
            return console.log(f.sort((a,b) => a-b).join('\n'));
        }
    }
}
