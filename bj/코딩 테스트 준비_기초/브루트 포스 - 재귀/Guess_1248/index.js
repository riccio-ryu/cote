// 2024

let [n, list] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r|\s*/g, ""));
n = Number(n);
list = list.split("");
// console.log(n, list);
const arr = [];
let m = n;
let bool = false;

// 각 칸의 배열
while (list.length > 0) {
  arr.push([]);
  for (let i = 0; i < m; i++) {
    arr[arr.length - 1].push(list.shift());
  }
  m--;
}
// console.log(arr);

const ff = (q) => {
  // console.log(bool, q);
  if (bool) return;
  if (q.length === n) {
    console.log(q.join(" "));
    bool = true;
    return;
  }
  for (let i = -10; i <= 10; i++) {
    q.push(i);
    // console.log("chq : ", check(q));
    if (check(q)) {
      ff(q);
    }
    q.pop();
  }
};

const check = (w) => {
  let x = w.length - 1;
  let sum = 0;
  for (let i = x; i >= 0; i--) {
    sum += w[i];
    // console.log("ff?", arr[i][x - i], w);
    if (arr[i][x - i] == "+" && sum <= 0) return false;
    if (arr[i][x - i] == "-" && sum >= 0) return false;
    if (arr[i][x - i] == "0" && sum != 0) return false;
  }
  return true;
};

ff([]);
