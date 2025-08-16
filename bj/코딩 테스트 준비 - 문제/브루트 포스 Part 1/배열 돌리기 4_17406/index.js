const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.splice(0, 1)[0].split(" ").map(Number);

const matrix = [];
for (let i = 0; i < N; i++) {
  matrix.push(input.splice(0, 1)[0].split(" ").map(Number));
}
const operations = input.map((line) => line.split(" ").map(Number));
// console.log(N, M, K, matrix, operations);
// 회전 연산 순열 구하기
function getPermutations(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);
  let result = [];
  arr.forEach((v, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const perms = getPermutations(rest, selectNum - 1);
    const attached = perms.map((p) => [v, ...p]);
    result.push(...attached);
  });
  return result;
}

// 배열 회전 함수
function rotate(matrix, op) {
  const [r, c, s] = op;
  const temp = matrix.map((row) => [...row]);
  for (let layer = 1; layer <= s; layer++) {
    let top = r - layer - 1,
      left = c - layer - 1;
    let bottom = r + layer - 1,
      right = c + layer - 1;
    // 위
    for (let i = left; i < right; i++) temp[top][i + 1] = matrix[top][i];
    // 오른쪽
    for (let i = top; i < bottom; i++) temp[i + 1][right] = matrix[i][right];
    // 아래
    for (let i = right; i > left; i--) temp[bottom][i - 1] = matrix[bottom][i];
    // 왼쪽
    for (let i = bottom; i > top; i--) temp[i - 1][left] = matrix[i][left];
  }
  return temp;
}

let answer = Infinity;
const perms = getPermutations(operations, K);
for (const perm of perms) {
  let tempMatrix = matrix.map((row) => [...row]);
  for (const op of perm) {
    tempMatrix = rotate(tempMatrix, op);
  }
  for (const row of tempMatrix) {
    answer = Math.min(
      answer,
      row.reduce((a, b) => a + b, 0)
    );
  }
}
console.log(answer);
