// 2025

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input)

const N = parseInt(input[0]);
const board = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    for (let dy = y; dy < y + 10; dy++) {
        for (let dx = x; dx < x + 10; dx++) {
            board[dy][dx] = 1;
        }
    }
}

// console.log(board)

const heights = Array.from({ length: 100 }, () => Array(100).fill(0));
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (board[i][j] === 1) {
            heights[i][j] = i === 0 ? 1 : heights[i - 1][j] + 1;
        }
    }
}

let maxArea = 0;

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (heights[i][j] === 0) continue;

        let minHeight = heights[i][j];
        // console.log(i,j, minHeight)
        // 현재 위치 (i, j)에서 왼쪽 방향으로 확장하며 넓이 계산
        for (let k = j; k >= 0; k--) {
            if (heights[i][k] === 0) break;
            
            // 가로로 이동하며 만나는 높이 중 최솟값이 직사각형의 높이가 됨
            minHeight = Math.min(minHeight, heights[i][k]);
            const width = j - k + 1;
            maxArea = Math.max(maxArea, minHeight * width);
        }
    }
}

console.log(maxArea);
