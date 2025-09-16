// 2025

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const SIZE = 5;
let boards = [];
for (let i = 0; i < SIZE * SIZE * SIZE; i += SIZE) {
  boards.push(
    input.slice(i, i + SIZE).map(line => line.split(" ").map(Number))
  );
}

// console.log(boards);

function rotate(board) {
  const newBoard = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      newBoard[j][SIZE - 1 - i] = board[i][j];
    }
  }
  return newBoard;
}

function bfs(cube) {
  if (cube[0][0][0] === 0 || cube[4][4][4] === 0) return Infinity;

  const dirs = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  const visited = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
  );

  const q = [[0, 0, 0, 0]]; // z,x,y,dist
  visited[0][0][0] = true;

  while (q.length) {
    const [z, x, y, d] = q.shift();
    if (z === 4 && x === 4 && y === 4) return d;

    for (const [dz, dx, dy] of dirs) {
      const nz = z + dz,
        nx = x + dx,
        ny = y + dy;
      if (
        nz >= 0 &&
        nx >= 0 &&
        ny >= 0 &&
        nz < SIZE &&
        nx < SIZE &&
        ny < SIZE &&
        !visited[nz][nx][ny] &&
        cube[nz][nx][ny] === 1
      ) {
        visited[nz][nx][ny] = true;
        q.push([nz, nx, ny, d + 1]);
      }
    }
  }
  return Infinity;
}

function* permutations(arr, n = arr.length) {
  if (n === 1) yield arr.slice();
  else {
    for (let i = 0; i < n; i++) {
      yield* permutations(arr, n - 1);
      const j = n % 2 ? 0 : i;
      [arr[n - 1], arr[j]] = [arr[j], arr[n - 1]];
    }
  }
}

let answer = Infinity;

const idxs = [0, 1, 2, 3, 4];
for (const order of permutations(idxs)) {
  // 회전 경우
  const rotateIdxs = [0, 0, 0, 0, 0];
  function dfs(level) {
    if (level === SIZE) {
      const cube = [];
      for (let i = 0; i < SIZE; i++) {
        let board = boards[order[i]];
        for (let r = 0; r < rotateIdxs[i]; r++) board = rotate(board);
        cube.push(board);
      }
      const dist = bfs(cube);
      if (dist < answer) answer = dist;
      return;
    }
    for (let r = 0; r < 4; r++) {
      rotateIdxs[level] = r;
      dfs(level + 1);
    }
  }
  dfs(0);
}

console.log(answer === Infinity ? -1 : answer);
