// 2025

const input = require("fs").readFileSync("example.txt").toString().trim();

let answer = 1;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "c") {
    if (i > 0 && input[i - 1] === "c") {
      answer *= 25;
    } else {
      answer *= 26;
    }
  } else if (input[i] === "d") {
    if (i > 0 && input[i - 1] === "d") {
      answer *= 9;
    } else {
      answer *= 10;
    }
  }
}
console.log(answer);
