// 2024
const input = require("fs").readFileSync("example.txt").toString().trim();
// .split("\n");
const n = +input;
const arr = Array(n)
  .fill()
  .map((_, i) => i + 1);
// console.log(arr);
const fs = (arr) => {
  const result = [];
  const ff = (a, b) => {
    if (b.length === 0) {
      result.push(a);
    } else {
      for (let i = 0; i < b.length; i++) {
        let c = a.concat(b[i]);
        let d = b.slice(0, i).concat(b.slice(i + 1));
        ff(c, d);
      }
    }
  };
  ff([], arr);
  return result;
};

const ww = fs(arr);
ww.forEach((w) => {
  console.log(w.join(" "));
});
