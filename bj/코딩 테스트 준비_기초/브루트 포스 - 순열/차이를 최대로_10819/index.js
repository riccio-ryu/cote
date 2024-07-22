const fs = require("fs");

// 입력을 읽어옵니다.
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const n = parseInt(input[0]);
let m = input[1].split(" ").map(Number);

// 줄세우기
const ff = (arr) => {
  const result = [];

  const fff = (saar, l = []) => {
    if (saar.length === 0) {
      //다 돌았다
      result.push(l);
    } else {
      for (let i = 0; i < saar.length; i++) {
        const copy = [...saar];
        const k = copy.splice(i, 1);
        // console.log(copy, k);
        fff(copy, l.concat(k));
      }
    }
  };
  fff(arr);
  return result;
};

const calc = (arr) => {
  // console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};

let max = 0;
const arrays = ff(m);

for (const arr of arrays) {
  const x = calc(arr);
  // console.log(max, x);
  max = Math.max(max, x);
}

console.log(max);
