// 2025

// hard ...
// https://tussle.tistory.com/756 참고

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const N = parseInt(input[0]);
const board = input.slice(1).map((line) => line.split(""));

// console.log(N, board);

const dx = [0, 1, -1, 1, -1, 0];
const dy = [-1, -1, 0, 0, 1, 1];

let visited = Array.from({ length: N }, () => Array(N).fill(false));
let tempBoard = Array.from({ length: N }, () => Array(N).fill(0));
let result = 0; // 최소 색 개수

function dfs(x, y) {
  if (result === 3) return; // 색이 3개 필요하면 종료

  let color = Array(4).fill(false); // 1~3번 색 사용 여부 체크
  visited[y][x] = true;

  for (let i = 0; i < 6; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      if (board[ny][nx] === "X" && tempBoard[ny][nx] !== 0) {
        color[tempBoard[ny][nx]] = true;
      }
    }
  }

  for (let i = 1; i < color.length; i++) {
    if (!color[i]) {
      result = Math.max(result, i);
      tempBoard[y][x] = i;
      break;
    }
  }

  for (let i = 0; i < 6; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      if (board[ny][nx] === "X" && !visited[ny][nx]) {
        dfs(nx, ny);
      }
    }
  }
}

function search() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === "X" && !visited[i][j]) {
        dfs(j, i);
        if (result === 3) return;
      }
    }
  }
}

search();
console.log(result);
