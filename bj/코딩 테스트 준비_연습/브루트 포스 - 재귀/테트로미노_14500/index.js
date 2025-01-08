// 2024
const [[N, M], ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));

// console.log(N, M, input);
// 노가다;;
const tetrominos = [
  // 정사각형
  [
    [1, 1],
    [1, 1],
  ],

  // 직선
  [[1, 1, 1, 1]], // 가로
  [[1], [1], [1], [1]], // 세로

  // ㄴ 모양
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ], // 아래로 꺾임
  [
    [1, 1, 1],
    [1, 0, 0],
  ], // 오른쪽 꺾임
  [
    [1, 1],
    [0, 1],
    [0, 1],
  ], // 위로 꺾임
  [
    [0, 0, 1],
    [1, 1, 1],
  ], // 왼쪽 꺾임

  // 대칭 ㄴ 모양
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ], // 아래로 꺾임
  [
    [1, 1, 1],
    [0, 0, 1],
  ], // 오른쪽 꺾임
  [
    [1, 1],
    [1, 0],
    [1, 0],
  ], // 위로 꺾임
  [
    [1, 0, 0],
    [1, 1, 1],
  ], // 왼쪽 꺾임

  // ㄹ 모양
  [
    [1, 1, 0],
    [0, 1, 1],
  ], // 오른쪽 대각선
  [
    [0, 1, 1],
    [1, 1, 0],
  ], // 왼쪽 대각선
  [
    [1, 0],
    [1, 1],
    [0, 1],
  ], // 세로 오른쪽 대각선
  [
    [0, 1],
    [1, 1],
    [1, 0],
  ], // 세로 왼쪽 대각선

  // ㅏ 모양
  [
    [1, 0],
    [1, 1],
    [1, 0],
  ], // ㅏ
  [
    [0, 1],
    [1, 1],
    [0, 1],
  ], // ㅓ
  [
    [0, 1, 0],
    [1, 1, 1],
  ], // ㅗ
  [
    [1, 1, 1],
    [0, 1, 0],
  ], // ㅜ
];

let max = 0;

function getArea(x, y, shape) {
  let sum = 0;
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      const nx = x + i;
      const ny = y + j;
      if (nx >= N || ny >= M) return 0; // 외 제외
      sum += input[nx][ny] * shape[i][j];
    }
  }
  return sum;
}

// 모든 칸, 모든 테트로미노
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    for (const shape of tetrominos) {
      max = Math.max(max, getArea(x, y, shape));
    }
  }
}

console.log(max);

