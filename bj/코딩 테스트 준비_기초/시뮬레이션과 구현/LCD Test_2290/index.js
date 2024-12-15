// 2024

let [s, n] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
// .map((s) => s);
s = +s;
// console.log(s, n);

const arr = [
  [0, 1, 2, 4, 5, 6], // 0
  [2, 5], // 1
  [0, 2, 3, 4, 6], // 2
  [0, 2, 3, 5, 6], // 3
  [1, 2, 3, 5], // 4
  [0, 1, 3, 5, 6], // 5
  [0, 1, 3, 4, 5, 6], // 6
  [0, 2, 5], // 7
  [0, 1, 2, 3, 4, 5, 6], // 8
  [0, 1, 2, 3, 5, 6], // 9
];

function lcd(s, n) {
  const rows = Array(2 * s + 3).fill(""); // LCD 디스플레이의 각 줄을 저장

  for (let idx = 0; idx < n.length; idx++) {
    const num = parseInt(n[idx], 10); // 현재 숫자
    const marr = arr[num];

    // 0번 세그먼트 (상단 가로)
    rows[0] += marr.includes(0) ? " " + "-".repeat(s) + " " : " ".repeat(s + 2);

    // 1번과 2번 세그먼트 (상단 세로)
    for (let i = 1; i <= s; i++) {
      rows[i] +=
        (marr.includes(1) ? "|" : " ") +
        " ".repeat(s) +
        (marr.includes(2) ? "|" : " ");
    }

    // 3번 세그먼트 (중앙 가로)
    rows[s + 1] += marr.includes(3)
      ? " " + "-".repeat(s) + " "
      : " ".repeat(s + 2);

    // 4번과 5번 세그먼트 (하단 세로)
    for (let i = s + 2; i <= 2 * s + 1; i++) {
      rows[i] +=
        (marr.includes(4) ? "|" : " ") +
        " ".repeat(s) +
        (marr.includes(5) ? "|" : " ");
    }

    // 6번 세그먼트 (하단 가로)
    rows[2 * s + 2] += marr.includes(6)
      ? " " + "-".repeat(s) + " "
      : " ".repeat(s + 2);

    // 각 숫자 간의 공백 추가 (마지막 숫자 제외)
    if (idx < n.length - 1) {
      for (let i = 0; i < rows.length; i++) {
        rows[i] += " ";
      }
    }
  }

  // 각 줄을 출력
  return rows.join("\n");
}
console.log(lcd(s, n));

/**
 *   0
 * 1   2
 *   3
 * 4   5
 *   6
0: 0, 1, 2,    4, 5, 6
1:       2,       5
2: 0,    2, 3, 4,    6
3: 0,    2, 3,    5, 6
4:    1, 2, 3,    5
5: 0, 1,    3,    5, 6
6: 0, 1,    3, 4, 5, 6
7: 0,    2,       5
8: 0, 1, 2, 3, 4, 5, 6
9: 0, 1, 2, 3,    5, 6
 */
