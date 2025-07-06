// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const dx = [0, -1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 0, -1, -1, -1, 0, 1, 1, 1];

let Answer = 0;
const MAX = 4;

let MAP = Array.from({ length: MAX }, () => Array(MAX).fill(0));
let Fish = Array.from({ length: 20 }, () => ({
  x: 0,
  y: 0,
  Dir: 0,
  Live: false,
}));

function Max(A, B) {
  return A > B ? A : B;
}

function Input() {
  for (let i = 0; i < 4; i++) {
    const line = input[i].split(" ").map(Number);
    for (let j = 0; j < 4; j++) {
      const a = line[j * 2];
      const b = line[j * 2 + 1];
      MAP[i][j] = a;
      Fish[a] = { x: i, y: j, Dir: b, Live: true };
    }
  }
}

function Copy_State(A, B, C, D) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      A[i][j] = B[i][j];
    }
  }
  for (let i = 1; i <= 16; i++) {
    C[i] = { ...D[i] };
  }
}

function Swap_Fish(Idx, IIdx) {
  const temp = { ...Fish[Idx] };
  Fish[Idx].x = Fish[IIdx].x;
  Fish[Idx].y = Fish[IIdx].y;
  Fish[IIdx].x = temp.x;
  Fish[IIdx].y = temp.y;
}

function Move_Fish() {
  for (let i = 1; i <= 16; i++) {
    if (!Fish[i].Live) continue;

    let { x, y, Dir } = Fish[i];
    let nx = x + dx[Dir];
    let ny = y + dy[Dir];
    let Flag = false;

    if (nx >= 0 && ny >= 0 && nx < 4 && ny < 4) {
      if (MAP[nx][ny] === 0) {
        Flag = true;
        Fish[i].x = nx;
        Fish[i].y = ny;
        MAP[nx][ny] = i;
        MAP[x][y] = 0;
      } else if (MAP[nx][ny] !== -1) {
        Flag = true;
        Swap_Fish(i, MAP[nx][ny]);
        const temp = MAP[x][y];
        MAP[x][y] = MAP[nx][ny];
        MAP[nx][ny] = temp;
      }
    }

    if (!Flag) {
      let nDir = Dir + 1;
      if (nDir === 9) nDir = 1;
      nx = x + dx[nDir];
      ny = y + dy[nDir];

      while (nDir !== Dir) {
        if (nx >= 0 && ny >= 0 && nx < 4 && ny < 4) {
          if (MAP[nx][ny] === 0) {
            Fish[i].x = nx;
            Fish[i].y = ny;
            MAP[nx][ny] = i;
            MAP[x][y] = 0;
            Fish[i].Dir = nDir;
            break;
          } else if (MAP[nx][ny] !== -1) {
            Swap_Fish(i, MAP[nx][ny]);
            const temp = MAP[x][y];
            MAP[x][y] = MAP[nx][ny];
            MAP[nx][ny] = temp;
            Fish[i].Dir = nDir;
            break;
          }
        }
        nDir++;
        if (nDir === 9) nDir = 1;
        nx = x + dx[nDir];
        ny = y + dy[nDir];
      }
    }
  }
}

function Make_State(x, y, nx, ny, Fish_Num, T) {
  if (T) {
    MAP[x][y] = 0;
    MAP[nx][ny] = -1;
    Fish[Fish_Num].Live = false;
  } else {
    MAP[x][y] = -1;
    MAP[nx][ny] = Fish_Num;
    Fish[Fish_Num].Live = true;
  }
}

function DFS(x, y, Dir, Sum) {
  Answer = Max(Answer, Sum);

  const C_MAP = Array.from({ length: 4 }, () => Array(4).fill(0));
  const C_Fish = Array.from({ length: 20 }, () => ({
    x: 0,
    y: 0,
    Dir: 0,
    Live: false,
  }));
  Copy_State(C_MAP, MAP, C_Fish, Fish);

  Move_Fish();

  for (let i = 1; i <= 3; i++) {
    const nx = x + dx[Dir] * i;
    const ny = y + dy[Dir] * i;
    if (nx >= 0 && ny >= 0 && nx < 4 && ny < 4) {
      if (MAP[nx][ny] === 0) continue;

      const Fish_Num = MAP[nx][ny];
      const nDir = Fish[Fish_Num].Dir;

      Make_State(x, y, nx, ny, Fish_Num, true);
      DFS(nx, ny, nDir, Sum + Fish_Num);
      Make_State(x, y, nx, ny, Fish_Num, false);
    } else break;
  }

  Copy_State(MAP, C_MAP, Fish, C_Fish);
}

function Solution() {
  const F_Num = MAP[0][0];
  const Dir = Fish[F_Num].Dir;
  Fish[F_Num].Live = false;
  MAP[0][0] = -1;

  DFS(0, 0, Dir, F_Num);
  console.log(Answer);
}

Input();
Solution();
