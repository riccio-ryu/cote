// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split(' ').map(Number);

const [N,M] = input;
/*
1. 2칸 위로, 1칸 오른쪽
2. 1칸 위로, 2칸 오른쪽
3. 1칸 아래로, 2칸 오른쪽
4. 2칸 아래로, 1칸 오른쪽
*/
function solve() {
    if (N === 1) return 1;

    // 세로가 2이면 2번, 3번 이동만 가능 (2칸 오른쪽)
    if (N === 2) {
        // 4가지 방법을 다 못 씀 4칸
        return Math.min(4, Math.floor((M + 1) / 2));
    }

    if (N >= 3) {
        // 가로가 7 미만이면 4가지 방법을 다 못 써서 최대 4칸 제한
        if (M < 7) {
            return Math.min(4, M);
        }
        // 가로가 7 이상이면 4가지 방법 다 쓰고 이후 오른쪽 1칸씩 이동
        // (M-7) + 5 = M - 2
        else {
            return M - 2;
        }
    }
}

console.log(solve());
