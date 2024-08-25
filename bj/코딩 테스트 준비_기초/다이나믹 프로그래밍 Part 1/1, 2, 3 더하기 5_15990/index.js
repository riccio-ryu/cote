// 2024

const [t, ...num] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => Number(s.replace(/\n|\r|\s*/g, "")));

const q = 1000000009;
const max = Math.max(...num);
const arr = Array.from({ length: max + 1 }, () => [0, 0, 0]);

arr[1] = [1, 0, 0];
arr[2] = [0, 1, 0];
arr[3] = [1, 1, 1];

for (let i = 4; i <= max; i++) {
       // 전의 것은 뒷 자리가 2,3인것은 다음에 + 1이 붙는다.
  arr[i][0] = (arr[i - 1][1] + arr[i - 1][2]) % q;
  arr[i][1] = (arr[i - 2][0] + arr[i - 2][2]) % q;
  arr[i][2] = (arr[i - 3][0] + arr[i - 3][1]) % q;
}

// console.log(arr);
const results = num.map((n) => (arr[n][0] + arr[n][1] + arr[n][2]) % q);
console.log(results.join("\n"));

/*
0 -> 0
1 -> 1 (
       1
) 1, 0, 0
2 -> 1 (
       2
) 0, 1, 0
3 -> 3 (
       1 + 2
       2 + 1
       3
) 1, 1, 1
4 -> 3 (
       1 + 2 + 1
       1 + 3
       3 + 1
) 2, 0, 1
5 -> 4 (
       1 + 3 + 1
       2 + 1 + 2
       2 + 3
       3 + 2
) 1, 2, 1
6 -> 8 (
       1 + 2 + 1 + 2
       1 + 2 + 3
       1 + 3 + 2
       2 + 1 + 2 + 1
       2 + 3 + 1
       3 + 1 + 2
       3 + 2 + 1
       3 + 3
) 3, 3, 2
*/
