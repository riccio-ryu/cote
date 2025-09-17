// 2025

// replace(/\n|\r|\s*/g, "")  이부분에서 에러가 난다
// 첫 줄이 붙어서 잘못 파싱됩니다. (예: "10 10" → "1010" → 잘못된 N, M)

/*
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n").map((s) => s.replace(/\n|\r|\s*/g, ""));
const [N,M] = input[0].split('').map(Number)
const board = input.slice(1).map(s => s.split(''));
*/
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));
// console.log(N,M,board, input)


const state = Array.from({ length: N }, () => Array(M).fill(0));
// 0: 미방문, -1: 탐색중, 1: 탈출성공, 2: 탈출실패

const dx = { U: -1, D: 1, L: 0, R: 0 };
const dy = { U: 0, D: 0, L: -1, R: 1 };


function dfs(x, y) {
  if (state[x][y] === -1) return (state[x][y] = 2); // 싸이클
  if (state[x][y] === 1 || state[x][y] === 2) return state[x][y]; // 이미결정

  state[x][y] = -1; // 탐색중 표시

  const dir = board[x][y];
  const nx = x + dx[dir];
  const ny = y + dy[dir];

  if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
    state[x][y] = 1; // 탈출 성공
    return 1;
  }

  const result = dfs(nx, ny);
  state[x][y] = result;
  return state[x][y];
}


let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (dfs(i, j) === 1) count++;
    // console.log('-- ', i, j , 'state :: ', state);
  }
}

console.log(count);
