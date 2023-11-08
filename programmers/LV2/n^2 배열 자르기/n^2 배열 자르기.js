// 2023

// 2차 :: 탐색 범위를 축소하고, 시작~끝까지를 구한다.
function solution(n, left, right) {
    let answer = [];
    for(let i = left; i <= right; i++){
        const v = ~~(i/n)
        const r = i%n
        answer.push(Math.max(v,r) + 1)
    }
    return answer;
}

// 원인 :  배열요소에 0을 넣는과정(Array(n).fill(0))에서 이런 에러가 발생할 수 있다고 한다
// 1차, 30.0 / 100.0 :: 실패 (signal: aborted (core dumped))
/*
123
223
333
-> 123 223 333 -- (2,5) -- 12 '3 223' 333 --> 3 223
                    l : 2/3, 2%3  , r : 5/3, 5%3        -> 0, 2 / 1,2
1234
2234
3334
4444
-> 1234 2234 3334 4444 -- (7,14) -- 1234 223 '4 3334 444' 4 --> 4 3334 444
                    l : 7/4, 7%4  , r : 14/4, 14%4      -> 1,3 / 3, 2
*/
function solution(n, left, right) {
    let answer = [];
    const arr = new Array(n).fill(0).map(() => Array(n))
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            // console.log(i, j, Math.max(i, j))
            arr[i][j] = Math.max(i, j) + 1
        }
    }
    return arr.flat().slice(left, right+1);
}
