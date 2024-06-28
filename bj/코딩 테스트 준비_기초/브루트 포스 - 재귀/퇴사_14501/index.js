// 2024
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map(Number));
const [N] = input.shift();

let arr = new Array(N).fill(0);

// console.log(N, input, arr);

for (let i = 0; i < N; i++) {
  // console.log(i, input[i][0], input[i][1]);
  if (input[i][0] + i > N) continue;
  arr[i] += input[i][1];
  // console.log(arr);
  for (let j = i + input[i][0]; j < N; j++) {
    arr[j] = Math.max(arr[j], arr[i]);
  }
}

console.log(Math.max(...arr));



// 2023
//1 ≤ N ≤ 15

const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const days = parseInt(input.shift())    // N + 1
const tp = input.map(x => x.split(' ').map(Number))
let arr = Array(days).fill(0)

for (let i = 0; i < days; i++) {
    if(i + tp[i][0] > days) continue;
    arr[i] += tp[i][1];
    for (let j = i + tp[i][0]; j < days; j++) {
        arr[j] = Math.max(arr[j], arr[i])
    }
}
console.log(Math.max(...arr));


// let money = 0;
// let day = 0;

// console.log(days);
// console.log(tp);

// let ff = (val) => {
//     let ban = 0;
//     let arr = Array(days).fill(0)

//     let func = (num, mon) => {
//         let don = 0;
//         if(days > num){
//             console.log('+++ ', num, mon);
//             console.log('--- ', don);
//             don += mon;
//             console.log('*** ', don);
//         }
//         for (let i = 0; i < tp.length; i++) {
//             if(!arr[i]){
//                 ban += tp[i][1]
//                 if(days > num + tp[i][0]){
//                     arr[i] = 1
//                     func(num + tp[i][0], tp[i][1])
//                     arr[i] = 0
//                 }
//             }
//         }
//     }
//     func(0, 0)
//     // if(val > days){
//     //     console.log(val, money, ban, plus);
//         // money = ban + plus > money ? ban + plus : money
//     // }else{
//         // for (let i = 0; i < tp.length; i++) {
//         //     ff(val + tp[i][0], ban , tp[i][1])
//         // }
//     // }
// }
// ff(0);
