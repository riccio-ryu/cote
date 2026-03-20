// 2026

// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

const S = input[0];
const T = input[1];

function canTransform(s, t) {
    // BFS를 사용하여 T에서 S로 역추적
    const queue = [t];
    const visited = new Set([t]);
    
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(' ---------- : queue:', queue, 'current:', current, 'visited:', visited);
        // 목표 문자열에 도달한 경우
        if (current === s) {
            return 1;
        }
        
        // 현재 문자열이 목표보다 짧아진 경우 중단
        if (current.length <= s.length) {
            continue;
        }
        
        // 역연산 1: 끝이 'A'인 경우, A를 제거
        if (current[current.length - 1] === 'A') {
            const next = current.slice(0, -1);
            console.log('Next (remove A):', current, next, visited);
            if (!visited.has(next)) {
                visited.add(next);
                queue.push(next);
            }
        }
        
        // 역연산 2: 시작이 'B'인 경우, B를 제거하고 뒤집기
        if (current[0] === 'B') {
            const reversed = current.slice(1).split('').reverse().join('');
            console.log('Next (remove B and reverse):', current, reversed, visited);
            if (!visited.has(reversed)) {
                visited.add(reversed);
                queue.push(reversed);
            }
        }
    }
    
    return 0;
}

console.log(canTransform(S, T));
