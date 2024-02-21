/*
n 0 => 0 => 1
n 1 => 1 => 1
n 2 => 1,1 / 2 => 2
n 3 => 1,1,1 / 1,2 / 2,1 => 3
n 4 => 1,1,1,1 / 1,1,2 / 1,2,1 / 2,1,1 / 2,2 => 5
n 5 => 1,1,1,1,1 / 1,1,1,2 / 1,1,2,1 / 1,2,1,1 /2,1,1,1/ 1,2,2 / 2,1,2 / 2,2,1 => 8
피보나치(dp)
*/
// 2024
function solution(n) {
    let arr = new Array(n+1).fill(0)
    arr[0] = 1;
    arr[1] = 1;
    for(let i = 2; i <= n; i++){
        arr[i] = (arr[i-1] + arr[i-2])%1234567
    }
    // console.log(arr)
    return arr[n];
}

// 1차 합계: 25.0 / 100.0
function solution(n) {
    let arr = new Array(n+1).fill(0)
    arr[0] = 1;
    arr[1] = 1;
    for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    // console.log(arr)
    return arr[n];
}
