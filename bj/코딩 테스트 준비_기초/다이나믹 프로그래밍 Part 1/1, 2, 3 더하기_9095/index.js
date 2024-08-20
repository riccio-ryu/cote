const [t, ...num] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => Number(s.replace(/\n|\r|\s*/g, "")));

const arr = [0, 1, 2, 4];

for (let i = 4; i < 11; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}

num.forEach((n) => console.log(arr[n]));

/*
0 -> 0
1 -> 1 (
       1
       )
2 -> 2 (
       1 + 1
       2
)
3 -> 4 (
       11 + 1
       2 + 1
       1 + 2
       3
)
4 -> 7 (
       111 + 1
       21 + 1
       12 + 1
       3 + 1
       11 + 2
       2 + 2
       1 + 3
)
5 -> 13 (
       1111 + 1
       211 + 1
       121 + 1
       31 + 1
       112 + 1
       22 + 1
       13 + 1
       111 + 2
       21 + 2
       12 + 2
       3 + 2
       11 + 3
       2 + 3
)
*/
