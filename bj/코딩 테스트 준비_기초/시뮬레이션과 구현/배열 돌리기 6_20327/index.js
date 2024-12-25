// 2024

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, R] = input[0].split(" ").map(Number); // N: 배열 크기, R: 명령 개수
let grid = input
  .slice(1, 2 ** N + 1)
  .map((line) => line.split(" ").map(Number)); // 초기 배열
const commands = input
  .slice(2 ** N + 1)
  .map((line) => line.split(" ").map(Number)); // 명령 리스트

// 격자 상하 반전
function flipVertically(grid) {
  return grid.reverse();
}

// 격자 좌우 반전
function flipHorizontally(grid) {
  return grid.map((row) => row.reverse());
}

// 90도 시계 방향 회전
function rotateClockwise(grid) {
  const size = grid.length;
  const result = Array.from({ length: size }, () => Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result[j][size - 1 - i] = grid[i][j];
    }
  }
  return result;
}

// 90도 반시계 방향 회전
function rotateCounterClockwise(grid) {
  const size = grid.length;
  const result = Array.from({ length: size }, () => Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result[size - 1 - j][i] = grid[i][j];
    }
  }
  return result;
}

// 부분 격자 작업
function processSubgrid(grid, L, type) {
  const step = 2 ** L; // 부분 격자 크기
  const size = grid.length;
  const result = Array.from({ length: size }, () => Array(size).fill(0));

  for (let startX = 0; startX < size; startX += step) {
    for (let startY = 0; startY < size; startY += step) {
      const subgrid = [];
      for (let i = 0; i < step; i++) {
        subgrid.push(grid[startX + i].slice(startY, startY + step));
      }

      let transformed;
      if (type === 1) transformed = flipVertically(subgrid);
      else if (type === 2) transformed = flipHorizontally(subgrid);
      else if (type === 3) transformed = rotateClockwise(subgrid);
      else if (type === 4) transformed = rotateCounterClockwise(subgrid);

      for (let i = 0; i < step; i++) {
        for (let j = 0; j < step; j++) {
          result[startX + i][startY + j] = transformed[i][j];
        }
      }
    }
  }
  return result;
}

// 5~8번 연산: 블록 기반 작업
function processBlocks(grid, L, type) {
  const step = 2 ** L; // 블록 크기
  const n = grid.length; // 전체 배열 크기
  const blocksPerRow = n / step; // 블록 수

  // 블록 단위로 분리
  const blocks = [];
  for (let x = 0; x < n; x += step) {
    const row = [];
    for (let y = 0; y < n; y += step) {
      const block = [];
      for (let i = 0; i < step; i++) {
        block.push(grid[x + i].slice(y, y + step));
      }
      row.push(block);
    }
    blocks.push(row);
  }

  // 블록 위치를 조작
  let transformedBlocks;
  if (type === 5) {
    transformedBlocks = blocks.reverse(); // 상하 반전
  } else if (type === 6) {
    transformedBlocks = blocks.map((row) => row.reverse()); // 좌우 반전
  } else if (type === 7) {
    const size = blocks.length;
    transformedBlocks = Array.from({ length: size }, () => Array(size));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        transformedBlocks[j][size - 1 - i] = blocks[i][j];
      }
    }
  } else if (type === 8) {
    const size = blocks.length;
    transformedBlocks = Array.from({ length: size }, () => Array(size));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        transformedBlocks[size - 1 - j][i] = blocks[i][j];
      }
    }
  }

  // 변형된 블록을 다시 결합
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < blocksPerRow; i++) {
    for (let j = 0; j < blocksPerRow; j++) {
      const block = transformedBlocks[i][j];
      for (let x = 0; x < step; x++) {
        for (let y = 0; y < step; y++) {
          result[i * step + x][j * step + y] = block[x][y];
        }
      }
    }
  }

  return result;
}

// 명령 실행
for (const [type, L] of commands) {
  if (type <= 4) {
    grid = processSubgrid(grid, L, type);
  } else {
    grid = processBlocks(grid, L, type);
  }
}

// 결과 출력
console.log(grid.map((row) => row.join(" ")).join("\n"));
