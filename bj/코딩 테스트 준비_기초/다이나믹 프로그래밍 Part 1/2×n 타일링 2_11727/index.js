let input = require("fs").readFileSync("example.txt").toString().trim();
input = parseInt(input);

const arr = [0, 1, 3];

for (let i = 3; i <= input; i++) {
  let val = arr[i - 2] * 2 + arr[i - 1];
  arr[i] = val % 10007;
}
console.log(arr[input]);

/* 
  0 -> 0
  1 -> 1(1)
  2 -> 3(
       1 + 1
       = 
       ㅁ
       )
  3 -> 5(11 + 1
         = + 1
         ㅁ + 1
         1 + =
         1 + ㅁ)
  4 -> 5(
         111 + 1
         =1 + 1
         ㅁ1 + 1
         1= + 1
         1ㅁ + 1
         11 + =
         = + =
         ㅁ + =
         11 + ㅁ
         = + ㅁ
         ㅁ + ㅁ
         )
  5 -> (
        211 + 1
        1111 + 1
        121 + 1
        22 + 1
        112 + 1

        21 + 2
        111 + 2
        12 + 2
        )
*/
