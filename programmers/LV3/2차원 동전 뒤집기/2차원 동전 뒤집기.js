// 2024

// 경우의 수 4가지
/*
    1. 각 행의 첫 번째 원소가 서로 다르면 행을 먼저 뒤집는다. 이후 각 열의 첫 번째 원소가 다르면 열을 뒤집는다.
    2. 각 행의 첫 번째 원소가 서로 같으면 행을 먼저 뒤집는다. 이후 각 열의 첫 번째 원소가 다르면 열을 뒤집는다.
    3. 각 열의 첫 번째 원소가 서로 다르면 열을 먼저 뒤집는다. 이후 각 행의 첫 번째 원소가 다르면 행을 뒤집는다.
    4. 각 열의 첫 번째 원소가 서로 같으면 열을 먼저 뒤집는다. 이후 각 행의 첫 번째 원소가 다르면 행을 뒤집는다.
*/

// 경우의 수 4가지
/*
    1. 각 행의 첫 번째 원소가 서로 다르면 행을 먼저 뒤집는다. 이후 각 열의 첫 번째 원소가 다르면 열을 뒤집는다.
    2. 각 행의 첫 번째 원소가 서로 같으면 행을 먼저 뒤집는다. 이후 각 열의 첫 번째 원소가 다르면 열을 뒤집는다.
    3. 각 열의 첫 번째 원소가 서로 다르면 열을 먼저 뒤집는다. 이후 각 행의 첫 번째 원소가 다르면 행을 뒤집는다.
    4. 각 열의 첫 번째 원소가 서로 같으면 열을 먼저 뒤집는다. 이후 각 행의 첫 번째 원소가 다르면 행을 뒤집는다.
*/

function solution(beginning, target) {
    let answer = Infinity;
    const n = beginning.length;
    const m = beginning[0].length;
    for(let i = 0; i < 4; i++){
        let copy = JSON.parse(JSON.stringify(beginning));
        let cnt = 0;
        
        for (let j = 0; j < n; j++) {
            if ((i < 2 && copy[j][0] !== target[j][0]) || (i >= 2 && copy[j][0] === target[j][0])) {     // 0,1이고 copy의 첫번째 원소와 목표의 첫번째가 같지 않거나, 2,3이고 copy의 첫번째 원소와 목표의 첫번째 원소가 같으면
                cnt++;
                for (let k = 0; k < m; k++) {   //뒤집기
                    copy[j][k] = 1 ^ copy[j][k];
                }
            }
        }
        
        for (let j = 0; j < m; j++) {
            if ((i % 2 === 0 && copy[0][j] !== target[0][j]) || (i % 2 === 1 && copy[0][j] === target[0][j])) { // 2,4일떄, 행이나 열의 첫번째 의 j번째 원소와 타겟의 첫번째의 j번째 원소 비교
                cnt++;
                for (let k = 0; k < n; k++) {   //뒤집기
                    copy[k][j] = 1 ^ copy[k][j];
                }
            }
        }
        
        if (JSON.stringify(copy) === JSON.stringify(target)) {
            answer = Math.min(answer, cnt);
        }
    }
    return answer !== Infinity ? answer : -1;
}
