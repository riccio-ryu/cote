 // 2025

const input = require("fs").readFileSync("example.txt").toString().split(" ").map(Number);
let [a, b] = input;

a = a.toString().split('');
b = b.toString();

let answer = -1;

function dfs(path, used) {
    if (path.length === a.length) {
        if (path[0] === '0') return;
        const num = path.join('');
        if (num < b && +num > answer) {
            answer = +num;
        }
        return;
    }
    for (let i = 0; i < a.length; i++) {
        // console.log(`Checking: ${a[i]}, Used: ${used[i]}, path: ${path}, used: ${used}`);
        if (used[i]) continue;
        // 중복 숫자 방지
        if (i > 0 && a[i] === a[i-1] && !used[i-1]) continue;
        used[i] = true;
        path.push(a[i]);
        dfs(path, used);
        path.pop();
        used[i] = false;
    }
}

a.sort((x, y) => y.localeCompare(x)); // 내림차순 정렬(최대값부터 탐색)
if (a.length < b.length) {
    // 그냥 내림차순으로 붙이면 됨
    if (a[0] !== '0') {
        answer = +a.join('');
    } else {
        // 0이 맨 앞에 오면 안 됨
        for (let i = 1; i < a.length; i++) {
            if (a[i] !== '0') {
                [a[0], a[i]] = [a[i], a[0]];
                answer = +a.join('');
                break;
            }
        }
    }
} else {
    // console.log(a);
    dfs([], Array(a.length).fill(false));
}

console.log(answer);
