// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
let fireballs = [];

for (let i = 1; i <= M; i++) {
    const [r, c, m, s, d] = input[i].split(' ').map(Number);
    // 1 시작 -> 0부터 시작 변경
    fireballs.push({ r: r - 1, c: c - 1, m, s, d });
}

// console.log(fireballs)

// 0~7
const dr = [-1, -1, 0, 1, 1, 1, 0, -1];
const dc = [0, 1, 1, 1, 0, -1, -1, -1];

for (let k = 0; k < K; k++) {
    const map = Array.from({ length: N }, () => Array.from({ length: N }, () => []));

    // 모든 파이어볼 이동
    for (const fb of fireballs) {
        // 속력이 N보다 클 수 있으므로 % N 연산 필요
        let nr = (fb.r + dr[fb.d] * (fb.s % N) + N) % N;
        let nc = (fb.c + dc[fb.d] * (fb.s % N) + N) % N;
        map[nr][nc].push({ m: fb.m, s: fb.s, d: fb.d });    // m: 질량, s: 속력, d: 방향
    }
    // console.log(map)
    const nextFireballs = [];

    // 이동
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            console.log('mmm ', map[r][c])
            if (map[r][c].length === 0) continue;

            if (map[r][c].length === 1) {
                // 한 개면 그대로 유지
                const { m, s, d } = map[r][c][0];
                nextFireballs.push({ r, c, m, s, d });
            } else {
                // 두 개 이상이면 합치고 나누기
                let sumM = 0;
                let sumS = 0;
                let oddCount = 0;
                let evenCount = 0;
                const count = map[r][c].length;

                for (const fb of map[r][c]) {
                    sumM += fb.m;
                    sumS += fb.s;
                    if (fb.d % 2 === 0) evenCount++;
                    else oddCount++;
                }

                const newM = Math.floor(sumM / 5);
                const newS = Math.floor(sumS / count);

                if (newM > 0) {
                    // 모든 방향이 짝수거나 홀수면 0,2,4,6 아니면 1,3,5,7
                    const dirs = (oddCount === count || evenCount === count) ? [0, 2, 4, 6] : [1, 3, 5, 7];
                    for (const nd of dirs) {
                        nextFireballs.push({ r, c, m: newM, s: newS, d: nd });
                    }
                }
            }
        }
    }
    fireballs = nextFireballs;
}

const result = fireballs.reduce((acc, curr) => acc + curr.m, 0);
console.log(result);
