// 2024

let input = parseInt(
  require("fs").readFileSync("example.txt").toString().trim()
);
let cnt = 0;
// 시간초과
// console.log(input);
// while (input) {
//   const s = input.toString();
//   // console.log(input, s.length);
//   cnt += s.length;
//   input--;
// }
for (let i = 1; i <= input; i *= 10) {
  /* 
  120 => 
    1 => 120
    10 => 10, 11~120 => 111
    100 => 100, 101~120 => 21
  */
  // console.log(i, input - i + 1);
  cnt += input - i + 1;
}

console.log(cnt);
