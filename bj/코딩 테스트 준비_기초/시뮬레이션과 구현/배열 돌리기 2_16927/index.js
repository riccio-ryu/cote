// 2024

// 배열 돌리기 1 복붙했는데 왜 통과?

let [[n, m, r], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, "").split(" ").map(Number));
// console.log(n, m, r, input);

function rotate(array, n, m, r) {
  const layers = Math.min(n, m) / 2; // 계층의 수
  const result = Array.from({ length: n }, () => Array(m).fill(0)); // 결과 배열 초기화

  for (let layer = 0; layer < layers; layer++) {
    const elements = [];

    // 현재 계층의 원소를 추출 (시계방향 순서로)
    // 위쪽
    for (let i = layer; i < m - layer; i++) elements.push(array[layer][i]);
    // 오른쪽
    for (let i = layer + 1; i < n - layer; i++)
      elements.push(array[i][m - 1 - layer]);
    // 아래쪽
    for (let i = m - 2 - layer; i >= layer; i--)
      elements.push(array[n - 1 - layer][i]);
    // 왼쪽
    for (let i = n - 2 - layer; i > layer; i--) elements.push(array[i][layer]);

    // 회전 횟수를 배열 길이로 나눈 나머지 만큼만 이동
    const rotated = r % elements.length;
    const rotatedElements = [
      ...elements.slice(rotated),
      ...elements.slice(0, rotated),
    ];

    // 회전한 원소를 결과 배열에 삽입
    let idx = 0;

    // 위쪽
    for (let i = layer; i < m - layer; i++)
      result[layer][i] = rotatedElements[idx++];
    // 오른쪽
    for (let i = layer + 1; i < n - layer; i++)
      result[i][m - 1 - layer] = rotatedElements[idx++];
    // 아래쪽
    for (let i = m - 2 - layer; i >= layer; i--)
      result[n - 1 - layer][i] = rotatedElements[idx++];
    // 왼쪽
    for (let i = n - 2 - layer; i > layer; i--)
      result[i][layer] = rotatedElements[idx++];
  }

  return result;
}
// 회전 수행
const rotatedArray = rotate(input, n, m, r);

// 결과 출력
console.log(rotatedArray.map((row) => row.join(" ")).join("\n"));
