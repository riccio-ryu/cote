const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, ""));

/*
  현재 x:y
  내년 x':y'
  x'= x < M ? x + 1 : 1
  y'= y < N ? y + 1 : 1
  
  M = 10 
  N = 12
1 = 1:1   2 = 2:2   3 = 3:3   4=4:4... 9 =9:9   10 = 10:10   
11 = 1:11   12 = 2:12   13 = 3:1    14 = 4:2    15 = 5:3

16 = 6:4    17 = 7:5    18 = 8:6    19 = 9:7    20 = 10:8
21 = 1:9    22 = 2:10   23 = 3:11   24 = 4:12   25 = 5:1

26 = 6:2    27 = 7:3    28 = 8:4    29 = 9:5    30 = 10:6
31 = 1:7    32 = 2:8   33 = 3:9   34 = 4:110   35 = 5:11

46 = 6:12    47 = 7:1    48 = 8:2    49 = 9:3    50 = 10:4
51 = 1:5    52 = 2:6   53 = 3:7   54 = 4:8   55 = 5:9

56 = 6:10    57 = 7:11    58 = 8:12    59 = 9:1    60 = 10:2
61 = 1:3    62 = 2:4    63 = 3:5    64 = 4:6    65 = 5:7

66 = 6:8    67 = 7:9    68 = 8:10   69 = 9:11   70 = 10:12

lcm gcd 60, 2
*/

const cnt = parseInt(input.shift());
const arr = input.map((a) => a.split(" ").map(Number));
// console.log(cnt, arr);

const gcd = (a, b) => {
  if (b === 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

arr.forEach((a) => {
  const [M, N, X, Y] = a;
  // console.log(M, N, X, Y);
  const last = lcm(M, N);
  let x = X;
  let y = Y;
  while (true) {
    // console.log("x : ", x, "y : ", y);
    if (x > last || y > last) {
      console.log(-1);
      break;
    } else if (x > y) {
      y += N;
    } else if (x < y) {
      x += M;
    } else {
      console.log(x);
      break;
    }
  }
});
