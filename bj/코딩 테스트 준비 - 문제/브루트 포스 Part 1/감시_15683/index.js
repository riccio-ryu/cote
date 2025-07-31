// 2025

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(line => line.split(" ").map(Number));
const [n, m] = input.shift();

const dx = [0, 1, 0, -1]; // 우, 하, 좌, 상
const dy = [1, 0, -1, 0];

const cctvs = [];
let minBlind = Infinity;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (input[i][j] >= 1 && input[i][j] <= 5) {
            cctvs.push([i, j, input[i][j]]);
        }
    }
}

const dirs = [
    [],
    [[0], [1], [2], [3]], // 1번 CCTV
    [[0, 2], [1, 3]],     // 2번 CCTV
    [[0, 1], [1, 2], [2, 3], [3, 0]], // 3번 CCTV
    [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]], // 4번 CCTV
    [[0, 1, 2, 3]] // 5번 CCTV
];

function watch(board, x, y, dir) {
    for (const d of dir) {
        let nx = x, ny = y;
        while (true) {
            nx += dx[d];
            ny += dy[d];
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) break;
            if (board[nx][ny] === 6) break;
            if (board[nx][ny] === 0) board[nx][ny] = 7;
        }
    }
}

function dfs(depth, board) {
    if (depth === cctvs.length) {
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 0) cnt++;
            }
        }
        minBlind = Math.min(minBlind, cnt);
        return;
    }
    const [x, y, type] = cctvs[depth];
    for (const dir of dirs[type]) {
        const copy = board.map(row => row.slice());
        watch(copy, x, y, dir);
        dfs(depth + 1, copy);
    }
}

dfs(0, input);
console.log(minBlind);
