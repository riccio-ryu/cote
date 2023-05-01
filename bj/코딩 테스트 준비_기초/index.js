const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number);

let arr = [...Array(11)];
arr[1] = 1
arr[2] = 2
arr[3] = 4

for (let i = 4; i < 11; i++) {
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3]    
}
for (let i = 1; i < input.length; i++) {
    console.log(arr[input[i]]);
}

// let arr = [0, 1, 2, 4]
// for (let i = 1; i <= input.length; i++) {
//     let num = input[i]
//     for (let j = 4; j <= num; j++) {
//         arr[j] = arr[j-1] + arr[j-2] + arr[j-3]
//     }
//     console.log(arr[num]);
// }

/*
1 (1) -> 1
2 (2) -> 1,1 / 2
3 (4) -> 1,1,1 /1,2 /2,1 / 3
4 (7) -> 1,1,1,1 / 1,1,2 /1,2,1 / 2,1,1 / 2,2 / 1,3 / 3,1
5 (13)-> 1,1,1,1,1 / 1,1,1,2 / 1,1,2,1 / 1,2,1,1 / 2,1,1,1 / 1,2,2 / 2,1,2 / 2,2,1 / 1,1,3 / 1,3,1/ 3,1,1 / 2,3/ 3,2  
...

n = n-1 + n-2 + n-3
*/