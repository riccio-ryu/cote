// 2025


// 블로그 참고
const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
let gameCnt = 0;

const dxdy = [
  [0, -1],  // L
  [-1, 0],  // U
  [0, 1],   // R
  [1, 0],   // D
];

let output = [];

while (true) {
  const [r, c] = input[idx++].split(" ").map(Number);
  if (r === 0 && c === 0) break;

  gameCnt++;
  let board = [];
  let here = [0, 0];

  for (let i = 0; i < r; i++) {
    const row = input[idx++].split("");
    board.push(row);
    for (let j = 0; j < c; j++) {
      if (row[j] === "w" || row[j] === "W") {
        here = [i, j];
      }
    }
  }

  const order = input[idx++].trim();
  let result = "incomplete";

  const finish = () => {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (board[i][j] === "b") return false;
      }
    }
    return true;
  };

  for (let i = 0; i < order.length; i++) {
    if (finish()) {
      result = "complete";
      break;
    }

    let d;
    if (order[i] === "L") d = 0;
    else if (order[i] === "U") d = 1;
    else if (order[i] === "R") d = 2;
    else if (order[i] === "D") d = 3;

    const [dx, dy] = dxdy[d];
    const there = [here[0] + dx, here[1] + dy];
    const there2 = [there[0] + dx, there[1] + dy];

    // 빈칸 또는 목표
    if (board[there[0]][there[1]] === "." || board[there[0]][there[1]] === "+") {
      board[here[0]][here[1]] = board[here[0]][here[1]] === "w" ? "." : "+";
      board[there[0]][there[1]] = board[there[0]][there[1]] === "." ? "w" : "W";
      here = there;
    }

    // 박스
    else if (board[there[0]][there[1]] === "b" || board[there[0]][there[1]] === "B") {
      if (board[there2[0]][there2[1]] === "." || board[there2[0]][there2[1]] === "+") {
        board[there2[0]][there2[1]] =
          board[there2[0]][there2[1]] === "." ? "b" : "B";

        board[there[0]][there[1]] =
          board[there[0]][there[1]] === "b" ? "." : "+";

        board[here[0]][here[1]] =
          board[here[0]][here[1]] === "w" ? "." : "+";

        board[there[0]][there[1]] =
          board[there[0]][there[1]] === "." ? "w" : "W";

        here = there;
      }
    }

    if (i === order.length - 1) {
      result = finish() ? "complete" : "incomplete";
    }
  }

  output.push(`Game ${gameCnt}: ${result}`);
  for (let i = 0; i < r; i++) {
    output.push(board[i].join(""));
  }
}

console.log(output.join("\n"));
