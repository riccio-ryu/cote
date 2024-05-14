//2024
const input = require("fs").readFileSync("example.txt").toString().split("\n");
const a = +input[0];
const b = input[1].split(" ").map(Number);

const max = Math.max(...b);
const min = Math.min(...b);

console.log(min * max);



// 2023
const input = require('fs').readFileSync('example.txt').toString().split('\n');

// let cnt = input[0]
// let list = input[1].split(' ').map(Number).sort((a,b) => a-b)

// if(cnt%2 === 1){
//     console.log(list[parseInt(cnt/2)])
// }else{
//     console.log(list[cnt/2 - 1] * list[cnt/2])
// }
const list = input[1].split(' ')
const max = Math.max(...list)
const min = Math.min(...list)
console.log(max*min);
