const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, ""));

const [paper, ...rest] = [...input];
const [N, M] = paper.split(" ").map(Number);
const nums = rest.map((r) => r.split(" ").map(Number));
// console.log(N, M, nums);

const pol = [
  //ㅁ
  [
    [1, 1],
    [1, 1],
  ],
  // l
  [[1, 1, 1, 1]],
  // -
  [[1], [1], [1], [1]],
  // ㅏ
  [
    [1, 0],
    [1, 1],
    [1, 0],
  ],
  // ㅓ
  [
    [0, 1],
    [1, 1],
    [0, 1],
  ],
  // ㅗ
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
  // ㅜ
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  // L*4, j*4
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1],
    [0, 1],
    [0, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 0],
  ],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
  ],
  [
    [1, 1],
    [1, 0],
    [1, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
  ],
  // N *4
  [
    [1, 0],
    [1, 1],
    [0, 1],
  ],
  [
    [0, 1],
    [1, 1],
    [1, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
];

const getArea = (p, w, h, i, j) => {
  let area = 0;
  // console.log(p, w, h, i, j);
  for (let k = 0; k < w; k++) {
    for (let l = 0; l < h; l++) {
      // console.log(k, l, i, j, "/", k + i, l + j);
      // console.log(nums[k + i][l + j]);
      area += (nums[k + i][l + j] ? nums[k + i][l + j] : 0) * p[k][l];
    }
  }
  return area;
};

const getMax = (p, w, h) => {
  let max = 0;
  for (let i = 0; i < N - w + 1; i++) {
    for (let j = 0; j < M - h + 1; j++) {
      max = Math.max(max, getArea(p, w, h, i, j));
    }
  }
  return max;
};

let answer = 0;
for (let p of pol) {
  const [w, h] = [p.length, p[0].length];
  // console.log(w, h);
  answer = Math.max(answer, getMax(p, w, h));
}
console.log(answer);
