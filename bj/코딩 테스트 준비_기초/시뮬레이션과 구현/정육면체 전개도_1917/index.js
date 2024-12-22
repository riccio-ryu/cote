// 2024

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = 3; // 총 3개의 테스트 케이스
const testCases = [];
for (let t = 0; t < T; t++) {
  testCases.push(input.slice(t * 4, t * 4 + 4).map(line => line.split("")));
}

// 이동 방향 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 주어진 전개도가 정육면체를 형성할 수 있는지 확인
function isValidCube(grid) {
  const visited = Array.from({ length: 6 }, () => false); // 6개의 면 방문 여부
  const positions = []; // 면의 좌표 (x, y) 저장

  // 1. 전개도에서 모든 면의 위치 찾기
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (grid[x][y] === "#") {
        positions.push([x, y]);
      }
    }
  }

  // 정육면체는 정확히 6개의 면을 가져야 함
  if (positions.length !== 6) {
    return false;
  }

  // 2. DFS로 연결된 면이 올바른지 확인
  function dfs(idx, count) {
    visited[idx] = true;
    let connectedCount = 1;

    const [cx, cy] = positions[idx];
    for (let dir = 0; dir < 4; dir++) {
      const nx = cx + dx[dir];
      const ny = cy + dy[dir];
      const neighborIdx = positions.findIndex(([px, py]) => px === nx && py === ny);

      if (neighborIdx !== -1 && !visited[neighborIdx]) {
        connectedCount += dfs(neighborIdx, count + 1);
      }
    }
    return connectedCount;
  }

  // 시작점에서 DFS 시작
  const connectedFaces = dfs(0, 1);

  // 3. 모든 면이 연결되었는지 확인
  return connectedFaces === 6;
}

// 결과 처리
const results = testCases.map(grid => (isValidCube(grid) ? "yes" : "no"));
console.log(results.join("\n"));
