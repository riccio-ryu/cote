// 2024
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r|\s*/g, ""));

const N = +input[0];
let candy = input.splice(1).map((v) => v.split(""));
let max = 1;

const swap = (i, j, k) => {
  const xy = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const now = candy[i][j];
  // console.log(i, j, k, now, xy[k][0], xy[k][1]);
  if (
    candy[i + xy[k][0]] &&
    candy[i + xy[k][0]][j + xy[k][1]] &&
    now !== candy[i + xy[k][0]][j + xy[k][1]]
  ) {
    candy[i][j] = candy[i + xy[k][0]][j + xy[k][1]];
    candy[i + xy[k][0]][j + xy[k][1]] = now;
    return true;
  } else return false;
};

const search = () => {
  for (let l = 0; l < 2; l++) {
    // l 0,1  1이면 세로
    for (let x = 0; x < N; x++) {
      let count = 0;
      let color = curCandy(x, 0, l);
      for (let y = 0; y < N; y++) {
        // console.log(l, x, y, color);
        if (curCandy(x, y, l) === color) {
          count++;
          if (count > max) {
            max = count;
          }
        } else {
          color = curCandy(x, y, l);
          count = 1;
        }
      }
    }
  }
};

const curCandy = (x, y, l) => {
  if (l === 0) return candy[x][y];
  else return candy[y][x];
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < 4; k++) {
      if (swap(i, j, k)) {
        search();
        swap(i, j, k);
      }
    }
  }
}

console.log(max);
