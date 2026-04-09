// 2026

const fs = require('fs');
const [N, r, c] = fs.readFileSync('example').toString().trim().split(' ').map(Number);
let ans = 0;

function solve(n, row, col){
  console.log(`--- n : ${n}, row: ${row}, col: ${col}`);
  if (n === 0) return;

    const half = Math.pow(2, n - 1);
    const size = half * half; // 한 사분면에 들어있는 칸의 개수
console.log(`half: ${half}, size: ${size}, row: ${row}, col: ${col}, r: ${r}, c: ${c}`);
    if (r < row + half && c < col + half) {
      // console.log(`1사분면 ${r < row + half }, ${c < col + half}`);
        // 1사분면: (r, c)가 여기 있다면 그대로 파고듬
        solve(n - 1, row, col);
    } else if (r < row + half && c < col + 2 * half) {
      // console.log(`2사분면 ${r < row + half }, ${c < col + 2 * half}`);
        // 2사분면: 1사분면 크기만큼 더해주고 이동
        ans += size;
        solve(n - 1, row, col + half);
    } else if (r < row + 2 * half && c < col + half) {
      // console.log(`3사분면 ${r < row + 2 * half }, ${c < col + half}`);
        // 3사분면: 1, 2사분면 크기만큼 더해주고 이동
        ans += size * 2;
        solve(n - 1, row + half, col);
    } else {
      // console.log(`4사분면 ${r < row + 2 * half }, ${c < col + 2 * half}`);
        // 4사분면: 1, 2, 3사분면 크기만큼 더해주고 이동
        ans += size * 3;
        solve(n - 1, row + half, col + half);
    }
}

solve(N, 0, 0);
console.log(ans);


/**
 * 
 * 0 1
 * 2 3
 * 
 *    1분면: 0
 *    2분면: 1
 *    3분면: 2
 *    4분면: 3
 * 
 * 0 1 4 5
 * 2 3 6 7
 * 8 9 12 13
 * 10 11 14 15
 * 
 *   1분면: 0, 1, 2, 3,
 *   2분면: 4, 5, 6, 7,
 *   3분면: 8, 9, 10, 11,
 *   4분면: 12, 13, 14, 15,
 * 
 *     1분면: 0, 4, 8, 12, ...
 *     2분면: 1, 5, 9, 13, ...
 *     3분면: 2, 6, 10, 14, ...
 *     4분면: 3, 7, 11, 15, ...
 *  
 * 0 1 4 5 16 17 20 21
 * 2 3 6 7 18 19 22 23
 * 8 9 12 13 24 25 28 29
 * 10 11 14 15 26 27 30 31
 * 32 33 36 37 48 49 52 53
 * 34 35 38 39 50 51 54 55
 * 40 41 44 45 56 57 60 61
 * 42 43 46 47 58 59 62 63
 * 
 * 
 * 
 * 1분면: 0, 4, 8, 12, 16, 20, 24, 28, ... , 60
 * 2분면: 1, 5, 9, 13, 17, 21, 25, 29, ... , 61
 * 3분면: 2, 6, 10, 14, 18, 22, 26, 30, ... , 62
 * 4분면: 3, 7, 11, 15, 19, 23, 27, 31, ... , 63
 * 
 */
