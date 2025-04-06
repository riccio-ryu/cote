// 2025


const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const T = parseInt(input[0]);
// const board = input.slice(1).map((line) => line.split(" ").map(Number));
// console.log(T);

const isPrime = Array(10000).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i < 10000; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j < 10000; j += i) {
      isPrime[j] = false;
    }
  }
}

const bfs = (start, end) => {
  if (start === end) return 0;

  const queue = [[start, 0]];
  const visited = new Set();
  visited.add(start);

  while (queue.length) {
    const [num, steps] = queue.shift();
    const numArr = num.toString().split("");

    // 각 자리수 변경 (0~9)
    for (let i = 0; i < 4; i++) {
      for (let d = 0; d < 10; d++) {
        if (numArr[i] == d) continue;

        const newNumArr = [...numArr];
        newNumArr[i] = d.toString();
        const newNum = Number(newNumArr.join(""));

        // 1000 이상, 소수인지 확인, 방문 여부 체크
        if (newNum >= 1000 && isPrime[newNum] && !visited.has(newNum)) {
          if (newNum === end) return steps + 1;

          visited.add(newNum);
          queue.push([newNum, steps + 1]);
        }
      }
    }
  }

  return "Impossible";
};

const results = [];
for (let i = 1; i <= T; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  results.push(bfs(start, end));
}

console.log(results.join("\n"));
