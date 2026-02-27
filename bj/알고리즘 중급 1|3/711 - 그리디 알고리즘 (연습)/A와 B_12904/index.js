// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

let S = input[0];
let T = input[1].split(''); // 수정이 빈번하므로 배열로 변환

// console.log(`S: ${S}, T: ${T}`);

// T -> S

while (T.length > S.length) {
    const lastChar = T.pop();

    if (lastChar === 'B') {
        T.reverse();
    }
    // A일 경우는 이미 pop()
}

console.log(T, S)
console.log(T.join('') === S ? 1 : 0);
