// 2024


let input = require("fs").readFileSync("example.txt").toString().trim();
input = parseInt(input);

const arr = [0, 1, 2];

for (let i = 3; i <= input; i++) {
  let val = arr[i - 2] + arr[i - 1];
  arr[i] = val % 10007;
}
console.log(arr[input]);

/* 
  1 -> 1(1)
  2 -> 2(2, 11)
  3 -> 3(2 + 1
         11 + 1
         1 + 2)
  4 -> 5(21 + 1
         111 + 1
         12 + 1
         2 + 2
         11 + 2
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
