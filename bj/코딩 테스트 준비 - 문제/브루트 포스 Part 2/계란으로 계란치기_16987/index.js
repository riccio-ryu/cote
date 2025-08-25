// 2025

// 아래는 오류가 난다.
// 입력을 trim() 후 정확히 N줄만 파싱해서 NaN이 섞일 여지 제거

const input = require("fs").readFileSync("example.txt").toString().split("\n").map(s => s.trim());

const N = parseInt(input[0], 10);

// eggs[i] = [내구도(S), 무게(W)]
const eggs = [];
for (let i = 1; i <= N; i++) {
  const [S, W] = input[i].split(/\s+/).map(Number);
  eggs.push([S, W]);
}
// console.log(input, N, eggs)

let answer = 0;

function dfs(idx) {
  // console.log(idx, eggs)
  if (idx === N) {
    const broken = eggs.filter(([dur]) => dur <= 0).length;
    answer = Math.max(answer, broken);
    return;
  }

  // 이미 손에 든 계란이 깨져 있으면 다음으로
  if (eggs[idx][0] <= 0) {
    dfs(idx + 1);
    return;
  }

  let attacked = false;
  for (let j = 0; j < N; j++) {
    if (j === idx || eggs[j][0] <= 0) continue;

    attacked = true;

    // 계란 치기
    eggs[idx][0] -= eggs[j][1];
    eggs[j][0] -= eggs[idx][1];

    dfs(idx + 1);

    // 원상복구
    eggs[idx][0] += eggs[j][1];
    eggs[j][0] += eggs[idx][1];
  }

  // 공격할 수 없었던 경우(모두 깨짐)
  if (!attacked) {
    dfs(idx + 1);
  }
}

dfs(0);
console.log(answer);
/*
const input = require("fs").readFileSync("example.txt").toString().split("\n");

const N = parseInt(input[0]);
const eggs = input.slice(1).map(line => line.split(" ").map(Number)); 
// console.log(input, N, eggs)

let answer = 0;

function dfs(idx) {
  console.log(idx, eggs)
  if (idx === N) {
    const broken = eggs.filter(([dur]) => dur <= 0).length;
    answer = Math.max(answer, broken);
    return;
  }

  // 이미 손에 든 계란이 깨져 있으면 다음으로
  if (eggs[idx][0] <= 0) {
    dfs(idx + 1);
    return;
  }

  let attacked = false;
  for (let j = 0; j < N; j++) {
    if (j === idx || eggs[j][0] <= 0) continue;

    attacked = true;

    // 계란 치기
    eggs[idx][0] -= eggs[j][1];
    eggs[j][0] -= eggs[idx][1];

    dfs(idx + 1);

    // 원상복구
    eggs[idx][0] += eggs[j][1];
    eggs[j][0] += eggs[idx][1];
  }

  // 공격할 수 없었던 경우(모두 깨짐)
  if (!attacked) {
    dfs(idx + 1);
  }
}

dfs(0);
console.log(answer);
*/
