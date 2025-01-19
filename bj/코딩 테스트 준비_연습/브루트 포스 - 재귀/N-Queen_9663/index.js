// 2025


const input = +require("fs").readFileSync("example.txt").toString();
//console.log(input);
let res = 0;

const columns = Array(input).fill(false);
const diag1 = Array(2 * input - 1).fill(false);
const diag2 = Array(2 * input - 1).fill(false);

function queen(row) {
  if (row === input) {
    res++;
    return;
  }

  for (let col = 0; col < input; col++) {
    if (columns[col] || diag1[row + col] || diag2[row - col + input - 1]) {
      continue; // 충돌 발생
    }

    // 퀸 배치
    columns[col] = true;
    diag1[row + col] = true;
    diag2[row - col + input - 1] = true;

    queen(row + 1);

    // 배치 복원
    columns[col] = false;
    diag1[row + col] = false;
    diag2[row - col + input - 1] = false;
  }
}

// 시작
queen(0);
console.log(res);
