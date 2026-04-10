// 2026

const fs = require('fs');
const input = +fs.readFileSync('example').toString().trim();

// console.log(input);
let result = '';

function paint(i, j, size) {
    // 공백 구역인지 확인 (가운데 칸)
    // 현재 사이즈에서 행과 열을 3으로 나눈 몫이 1이면 정중앙임
    // console.log(`i: ${i}, j: ${j}, size: ${size}, i/size: ${Math.floor(i / size)}, j/size: ${Math.floor(j / size)}`);
    if (Math.floor(i / size) % 3 === 1 && Math.floor(j / size) % 3 === 1) {
        result += ' ';
    } else {
        // 더 이상 쪼갤 수 없는 크기(1)라면 별을 찍음
        if (size === 1) {
            result += '*';
        } else {
            // 더 작은 단위로 들어가서 확인 (size를 3으로 나눔)
            paint(i, j, size / 3);
        }
    }
}

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      // console.log(`i: ${i}, j: ${j}, size: ${Math.floor(input / 3)}`);
        paint(i, j, Math.floor(input / 3));
    }
    result += '\n';
}

console.log(result);
