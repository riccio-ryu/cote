// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let map = input
  .slice(1)
  .map((line) => line.replace(/\n|\r/g, "").split("").map(Number));
// console.log(N, M, map);

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let groupID = 1;
let groupMap = Array.from({ length: N }, () => Array(M).fill(0));
let groupSize = {};

// console.log(groupID, groupMap, groupSize);

function bfs(startX, startY) {
  let queue = [[startX, startY]];
  let size = 1;
  let cells = [[startX, startY]];
  groupMap[startX][startY] = groupID;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        map[nx][ny] === 0 &&
        groupMap[nx][ny] === 0
      ) {
        groupMap[nx][ny] = groupID;
        queue.push([nx, ny]);
        cells.push([nx, ny]);
        size++;
      }
    }
  }

  // 그룹 크기 저장
  groupSize[groupID] = size;
  groupID++;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0 && groupMap[i][j] === 0) {
      bfs(i, j);
    }
  }
}

// console.log(groupID, groupMap, groupSize);

let result = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      let adjacentGroups = new Set();
      let sum = 1;

      for (const [dx, dy] of directions) {
        let nx = i + dx;
        let ny = j + dy;

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
          let group = groupMap[nx][ny];
          if (!adjacentGroups.has(group)) {
            adjacentGroups.add(group);
            sum += groupSize[group];
          }
        }
      }
      // console.log(i, j, " sum :: ", sum);
      result[i][j] = sum % 10;
    }
  }
}

console.log(result.map((row) => row.join("")).join("\n"));
