// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

const N = parseInt(input[0]);
const cards = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const queries = input[3].split(' ').map(Number);
// console.log(cards, queries);

// 1. 숫자별 개수를 저장할 Map 생성
const cardMap = new Map();

for (let i = 0; i < N; i++) {
    const num = cards[i];
    if (cardMap.has(num)) {
        cardMap.set(num, cardMap.get(num) + 1);
    } else {
        cardMap.set(num, 1);
    }
}

// console.log(cardMap);

// 2. 쿼리에 대해 개수 확인
const result = [];
for (let i = 0; i < M; i++) {
    const target = queries[i];
    // 카드가 있으면 개수를, 없으면 0을 푸시
    result.push(cardMap.get(target) || 0);
}

// 3. 한 번에 출력
console.log(result.join(' '));
