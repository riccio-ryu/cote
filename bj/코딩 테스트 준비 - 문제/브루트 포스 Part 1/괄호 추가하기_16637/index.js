// 2025

const input = require("fs").readFileSync("example.txt").toString().split("\n").map((s) => s.replace(/\n|\r|\s*/g, ""));
let [n, expression] = input;
n = parseInt(n, 10);
// console.log(n, expression);
let maxResult = Number.MIN_SAFE_INTEGER;

function calc(a, op, b) {
    a = Number(a);
    b = Number(b);
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
}

function dfs(idx, current) {
    // console.log(idx, current);
    if (idx >= n) {
        maxResult = Math.max(maxResult, current);
        return;
    }
    // 괄호 없이 계산
    let op = expression[idx - 1];
    // console.log(idx, current, op);
    let num = Number(expression[idx]);
    dfs(idx + 2, calc(current, op, num));

    // 괄호를 쳐서 먼저 계산
    if (idx + 2 < n) {
        let nextOp = expression[idx + 1];
        let nextNum = Number(expression[idx + 2]);
        let bracket = calc(num, nextOp, nextNum);
        dfs(idx + 4, calc(current, op, bracket));
    }
}

if (n === 1) {
    maxResult = Number(expression[0]);
} else {
    dfs(2, Number(expression[0]));
}

console.log(maxResult);
