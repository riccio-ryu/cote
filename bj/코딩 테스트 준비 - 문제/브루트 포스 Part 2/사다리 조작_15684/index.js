// 2025


const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

// 세로 개수 N, 가로 개수 M, 세로선마다 가로선을 놓을 수 있는 위치의 개수 H
const [N, M, H] = input[0].split(" ").map(Number);
const ladder = Array.from({ length: H + 1 }, () => Array(N + 1).fill(false));

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  ladder[a][b] = true;
}
// console.log(ladder);
function check() {
  for (let i = 1; i <= N; i++) {
    let pos = i;
    for (let h = 1; h <= H; h++) {
      if (ladder[h][pos]) pos++;
      else if (ladder[h][pos - 1]) pos--;
    }
    if (pos !== i) return false;
  }
  return true;
}

let answer = 4; // 0..3 만 허용하므로 4는 못찾음 표시

function check() {
  for (let start = 1; start <= N; start++) {
    let pos = start;
    for (let h = 1; h <= H; h++) {
      if (ladder[h][pos])
        pos++; // 오른쪽으로 이동 (pos - pos+1 연결)
      else if (pos > 1 && ladder[h][pos - 1]) pos--; // 왼쪽으로 이동
    }
    if (pos !== start) return false;
  }
  return true;
}

function dfs(hStart, jStart, cnt) {
  // 더 이상 개선 불가하면 가지치기
  if (cnt >= answer) return;

  if (check()) {
    answer = cnt;
    return;
  }
  if (cnt === 3) return; // 3개 이상 못 놓음

  for (let h = hStart; h <= H; h++) {
    for (let j = h === hStart ? jStart : 1; j <= N - 1; j++) {
      // 이미 있거나 좌우에 있으면 못 놓음
      if (
        ladder[h][j] ||
        (j > 1 && ladder[h][j - 1]) ||
        (j < N - 1 && ladder[h][j + 1])
      )
        continue;

      ladder[h][j] = true;
      // 같은 행에서 인접 위치( j+1 )는 당연히 불가하니 j+2부터 시작
      dfs(h, j + 2, cnt + 1);
      ladder[h][j] = false;
    }
  }
}

dfs(1, 1, 0);
console.log(answer === 4 ? -1 : answer);


// 틀림
/*
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

// 세로 개수 N, 가로 개수 M, 세로선마다 가로선을 놓을 수 있는 위치의 개수 H
const [N, M, H] = input[0].split(" ").map(Number);
const ladder = Array.from({ length: H + 1 }, () => Array(N + 1).fill(false));

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  ladder[a][b] = true;
}
// console.log(ladder);
function check() {
  for (let i = 1; i <= N; i++) {
    let pos = i;
    for (let h = 1; h <= H; h++) {
      if (ladder[h][pos]) pos++;
      else if (ladder[h][pos - 1]) pos--;
    }
    if (pos !== i) return false;
  }
  return true;
}

let answer = -1;

function dfs(cnt, x, y) {
  if (cnt > 3) return;
  if (check()) {
    answer = cnt;
    return;
  }
  for (let i = x; i <= H; i++) {
    for (let j = i === x ? y : 1; j < N; j++) {
      if (ladder[i][j] || ladder[i][j - 1] || ladder[i][j + 1]) continue;
      ladder[i][j] = true;
      dfs(cnt + 1, i, j);
      ladder[i][j] = false;
    }
  }
}

dfs(0, 1, 1);
console.log(answer);
*/
