// 2024

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => parseInt(s.replace(/\n|\r|\s*/g, "")));

const N = input.shift();
// const max = Math.max(...input);
// const obj = new Array(max + 1).fill(0);

let arr = new Array(11).fill(0);
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;
// console.log(arr);
for (let i = 4; i < 11; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}
input.forEach((el) => {
  console.log(arr[el]);
});

// for (let i = 0; i < N; i++) {
//   obj[i + 1] = 2 ** i;
// }
// console.log(N, input, max, obj);
// for (let i = N + 1; i <= max; i++) {
//   let cnt = 0;
//   for (let j = 1; j <= N; j++) {
//     cnt += obj[i - j];
//   }
//   obj[i] = cnt;
// }
// input.forEach((element) => {
//   console.log(obj[element]);
// });
// console.log(obj);
/*
1 -> 1
2 -> 1 + 1
      2
3 ->  1 + 2
      1 + 1 + 1
      2 + 1
      3

4 ->  1 + 1 + 1 + 1   (3)
      1 + 2 + 1
      2 + 1 + 1
      3 + 1

      1 + 1 + 2       (2)
      2 + 2

      1 + 3           (1)


5 ->  1 + 1 + 1 + 1 + 1   (4)
      1 + 2 + 1 + 1
      2 + 1 + 1 + 1
      3 + 1 + 1
      1 + 1 + 2 + 1
      2 + 2 + 1
      1 + 3 + 1

      1 + 2 + 2           (3)
      1 + 1 + 1 + 2
      2 + 1 + 2
      3 + 2

      1 + 1 + 3           (2)   // 13
      2 + 3
N = 4 ?
1 -> 1
2 -> 1 + 1
      2
3 ->  1 + 2
      1 + 1 + 1
      2 + 1
      3

4 ->  1 + 1 + 1 + 1   (3)   ... 8
      1 + 2 + 1
      2 + 1 + 1
      3 + 1

      1 + 1 + 2       (2)
      2 + 2

      1 + 3           (1)
      4

5 ->  1 + 1 + 1 + 1 + 1   (4) ... 15 -> 8 + 4 + 2 + 1
      1 + 2 + 1 + 1
      2 + 1 + 1 + 1
      3 + 1 + 1
      1 + 1 + 2 + 1
      2 + 2 + 1
      1 + 3 + 1
      4 + 1

      1 + 2 + 2           (3)
      1 + 1 + 1 + 2
      2 + 1 + 2
      3 + 2

      1 + 1 + 3           (2)
      2 + 3

      1 + 4               (1)

 => 현재의 앞의 N의 갯수 만큼 더 한다
 즉 now = (now -1) + (now -2)...(now - N)

 N까지는 2N승까지... 즉 1,2,4,8,16...
*/
