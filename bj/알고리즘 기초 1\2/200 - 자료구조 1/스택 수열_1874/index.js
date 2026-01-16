// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);
const n = parseInt(input[0]);
const targetSequence = input.slice(1).map(Number);

let stack = [];
let result = [];
let count = 1; // 스택에 넣을 다음 숫자 (1부터 시작)
let possible = true;

for (let i = 0; i < n; i++) {
    const target = targetSequence[i];

    // 타겟 숫자를 만날 때까지 오름차순으로 push
    while (count <= target) {
        stack.push(count);
        result.push('+');
        count++;
    }

    // console.log('----- 11   ', stack, target, count);
    // 스택의 TOP이 타겟과 같다면 pop
    if (stack[stack.length - 1] === target) {
        stack.pop();
        result.push('-');
    } else {
        // 3. 스택의 TOP이 타겟과 다른데 더 이상 넣을 숫자가 없거나 로직이 꼬인 경우
        possible = false;
        break;
    }
    // console.log('22   -----', stack, target, count);
}

if (possible) {
    console.log(result.join('\n'));
} else {
    console.log('NO');
}
