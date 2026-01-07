// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

const [N_val, Q_val] = input[0].split(' ').map(Number);
const N = 1 << N_val; // 2^N
let board = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
const L_list = input[N + 1].split(' ').map(Number);

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

// console.log(`N: ${N}, Q: ${Q_val}, NV: ${N_val}, b: ${board}`);

// 시계방향 90도 회전 함수
// r,c => (r,c)  //2,4 => (5,2) // (i,j) => (j, size-1-i)
function rotate(r, c, size) {
    const temp = Array.from({ length: size }, () => new Array(size));
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            temp[j][size - 1 - i] = board[r + i][c + j];
        }
    }
    // console.log(temp)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            board[r + i][c + j] = temp[i][j];
        }
    }
    // console.log('bb ', board)
}

// 파이어스톰 시전
L_list.forEach(L => {
    const size = 1 << L;
    // 모든 부분 격자 회전
    for (let i = 0; i < N; i += size) {
        for (let j = 0; j < N; j += size) {
            // console.log(`i: ${i}, j: ${j}, size: ${size}`);
            rotate(i, j, size);
        }
    }

    // 얼음 감소 처리 (동시 적용을 위해 줄어들 좌표 저장)
    const meltList = [];
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (board[r][c] === 0) continue;
            let count = 0;
            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                if (nr >= 0 && nr < N && nc >= 0 && nc < N && board[nr][nc] > 0) {
                    count++;
                }
            }
            if (count < 3) meltList.push([r, c]);
        }
    }
    meltList.forEach(([r, c]) => board[r][c]--);
});

// 결과 구하기 (합계 및 BFS 덩어리 탐색)
let totalIce = 0;
let maxChunk = 0;
const visited = Array.from({ length: N }, () => new Array(N).fill(false));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        totalIce += board[i][j];
        if (board[i][j] > 0 && !visited[i][j]) {
            let chunkCount = 0;
            const queue = [[i, j]];
            visited[i][j] = true;

            while (queue.length > 0) {
                const [r, c] = queue.shift();
                chunkCount++;
                for (let k = 0; k < 4; k++) {
                    const nr = r + dr[k];
                    const nc = c + dc[k];
                    if (nr >= 0 && nr < N && nc >= 0 && nc < N && !visited[nr][nc] && board[nr][nc] > 0) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }
            maxChunk = Math.max(maxChunk, chunkCount);
        }
    }
}

console.log(totalIce);
console.log(maxChunk);
