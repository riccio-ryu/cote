// 2025


const input = require("fs").readFileSync("example.txt").toString().split("\n").map((s) => s.replace(/\n|\r|\s*/g, ""));
let [n, expression] = input;
n = parseInt(n, 10);
// console.log(n, expression);
let maxResult = -Infinity;

function calc(a, op, b) {
    a = Number(a);
    b = Number(b);
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
}

// 계산 함수 (연산자 우선순위 적용: * 먼저)
function evaluate(expr) {
  // 1. 먼저 * 처리
  let nums = [];
  let ops = [];
  for (let i = 0; i < expr.length; i++) {
    if (i % 2 === 0) {
      nums.push(Number(expr[i]));
    } else {
      let op = expr[i];
      if (op === "*") {
        let a = nums.pop();
        let b = Number(expr[++i]);
        nums.push(a * b);
      } else {
        ops.push(op);
        nums.push(Number(expr[++i]));
      }
    }
  }

  // 2. 이제 +, - 처리 (왼쪽부터)
  let result = nums[0];
  let idx = 1;
  for (let op of ops) {
    if (op === "+") result += nums[idx++];
    else result -= nums[idx++];
  }
  return result;
}

function dfs(idx, selected) {
  if (idx >= n) {
    // 선택된 괄호 반영한 새로운 수식 생성
    let newExpr = [];
    let i = 0;
    while (i < n) {
        // console.log(' ------ ', i, selected, newExpr)
      if (selected.has(i)) {
        // (a op b) 계산
        let a = Number(expression[i]);
        let op = expression[i + 1];
        let b = Number(expression[i + 2]);
        newExpr.push(calc(a, op, b).toString());
        i += 3;
      } else {
        newExpr.push(expression[i]);
        i++;
      }
    }
// console.log('i ::', i, 'newExpr :: ', newExpr)
    // 평가
    let val = evaluate(newExpr);
    maxResult = Math.max(maxResult, val);
    return;
  }

  // 괄호 추가 안 함
  dfs(idx + 2, selected);

  // 괄호 추가 (겹치지 않게 idx+2 넘김)
  if (idx + 2 < n) {
    selected.add(idx);
    dfs(idx + 4, selected);
    selected.delete(idx);
  }
}

dfs(0, new Set());

console.log(maxResult);
