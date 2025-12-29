//2025

// 문제를 이해를 잘 못했는데, 블로그를 보았고 
const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input)

const N = parseInt(input[0]);
const board = input.slice(1, 6);

const digits = [
    '###...#.###.###.#.#.###.###.###.###.###',
    '#.#...#...#...#.#.#.#...#.....#.#.#.#.#',
    '#.#...#.###.###.###.###.###...#.###.###',
    '#.#...#.#.....#...#...#.#.#...#.#.#...#',
    '###...#.###.###...#.###.###...#.###.###'
];//0~2,4~6, 8~10...

// 각 숫자의 3x5 패턴을 배열로 분리
const patterns = Array.from({ length: 10 }, (_, d) => {
    let p = [];
    for (let r = 0; r < 5; r++) {
        p.push(digits[r].substr(d * 4, 3));
    }
    return p;
});

let totalCount = 1;
let totalSum = 0;
let possibleEach = []; // 각 자릿수별 가능한 숫자 리스트

for (let n = 0; n < N; n++) {
    let possible = [];
    for (let d = 0; d < 10; d++) {
        let isMatch = true;
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 3; c++) {
                // 현재 전광판은 '#'인데, 숫자 패턴은 '.'이면 불가능
                if (board[r][n * 4 + c] === '#' && patterns[d][r][c] === '.') {
                    isMatch = false;
                    break;
                }
            }
            if (!isMatch) break;
        }
        if (isMatch) possible.push(d);
    }

    if (possible.length === 0) {
        console.log("-1");
        process.exit();
    }
    
    possibleEach.push(possible);
    totalCount *= possible.length;
}

// 자릿수별 기여도 계산
// (해당 자릿수 숫자들의 합 / 해당 자릿수 숫자 개수) * 10^(가중치)
let average = 0;
for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let num of possibleEach[i]) {
        sum += num;
    }
    average += (sum / possibleEach[i].length) * Math.pow(10, N - 1 - i);
}

console.log(average.toFixed(5)); 
