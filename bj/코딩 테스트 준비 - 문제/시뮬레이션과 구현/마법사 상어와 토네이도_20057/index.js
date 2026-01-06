// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

const N = parseInt(input[0]);
const board = input.slice(1).map(line => line.split(' ').map(Number));

// 토네이도 이동 방향: 좌(0), 하(1), 우(2), 상(3)
const dr = [0, 1, 0, -1];
const dc = [-1, 0, 1, 0];

// 각 방향별 모래 확산 상대 좌표와 비율
// [행, 열, 비율] 순서. 비율 -1은 alpha(나머지)를 의미함.
const ds = [
    // 좌측(0) 이동 시 패턴
    [[-1, 1, 0.01], [1, 1, 0.01], [-2, 0, 0.02], [2, 0, 0.02], [-1, 0, 0.07], [1, 0, 0.07], [-1, -1, 0.1], [1, -1, 0.1], [0, -2, 0.05], [0, -1, -1]],
    // 하측(1) 이동 시 패턴
    [[-1, -1, 0.01], [-1, 1, 0.01], [0, -2, 0.02], [0, 2, 0.02], [0, -1, 0.07], [0, 1, 0.07], [1, -1, 0.1], [1, 1, 0.1], [2, 0, 0.05], [1, 0, -1]],
    // 우측(2) 이동 시 패턴
    [[-1, -1, 0.01], [1, -1, 0.01], [-2, 0, 0.02], [2, 0, 0.02], [-1, 0, 0.07], [1, 0, 0.07], [-1, 1, 0.1], [1, 1, 0.1], [0, 2, 0.05], [0, 1, -1]],
    // 상측(3) 이동 시 패턴
    [[1, -1, 0.01], [1, 1, 0.01], [0, -2, 0.02], [0, 2, 0.02], [0, -1, 0.07], [0, 1, 0.07], [-1, -1, 0.1], [-1, 1, 0.1], [-2, 0, 0.05], [-1, 0, -1]]
];

let outSand = 0;
let r = Math.floor(N / 2);
let c = Math.floor(N / 2);

let moveDist = 1;
let d = 0;

outer: while (true) {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < moveDist; j++) {
            r += dr[d];
            c += dc[d];

            if (r < 0 || c < 0 || r >= N || c >= N) break outer;

            let currentSand = board[r][c];
            board[r][c] = 0;
            let totalSpread = 0;

            // 10개의 흩날리는 지점 (비율 9개 + alpha 1개)
            for (let k = 0; k < 10; k++) {
                const [sr, sc, p] = ds[d][k];
                const nr = r + sr;
                const nc = c + sc;

                if (p === -1) { // alpha 칸 처리
                    const alphaSand = currentSand - totalSpread;
                    if (nr >= 0 && nr < N && nc >= 0 && nc < N) board[nr][nc] += alphaSand;
                    else outSand += alphaSand;
                } else { // 비율 칸 처리
                    const spreadAmount = Math.floor(currentSand * p);
                    if (nr >= 0 && nr < N && nc >= 0 && nc < N) board[nr][nc] += spreadAmount;
                    else outSand += spreadAmount;
                    totalSpread += spreadAmount;
                }
            }
            
            // (0,0)에 도달하면 종료
            if (r === 0 && c === 0) break outer;
        }
        d = (d + 1) % 4;
    }
    moveDist++;
}

console.log(outSand);
