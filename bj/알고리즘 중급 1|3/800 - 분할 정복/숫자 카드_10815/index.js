// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');
const N = parseInt(input[0]);
// 상근이가 가진 카드를 Set에 저장 (중복 제거 및 빠른 검색)
const sangeunCards = new Set(input[1].split(' ').map(Number));

const M = parseInt(input[2]);
const queryCards = input[3].split(' ').map(Number);

// console.log(sangeunCards, queryCards); // 디버깅: 상근이의 카드 세트 및 조회 카드 확인
const result = [];
for (let i = 0; i < M; i++) {
    // Set.has()는 평균 O(1)의 시간 복잡도를 가짐
    if (sangeunCards.has(queryCards[i])) {
        result.push(1);
    } else {
        result.push(0);
    }
}

// 결과를 공백으로 구분하여 한 번에 출력
console.log(result.join(' '));
