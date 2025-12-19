// 2025


const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

// IP를 32비트 정수로 변환
function ipToInt(ip) {
  return ip.split(".").reduce((acc, cur) => {
    return (acc << 8) | Number(cur);
  }, 0);
}

// 32비트 정수를 IP 문자열로 변환
function intToIp(num) {
  return [
    (num >>> 24) & 255,
    (num >>> 16) & 255,
    (num >>> 8) & 255,
    num & 255,
  ].join(".");
}

const ips = [];
for (let i = 1; i <= N; i++) {
  ips.push(ipToInt(input[i]));
}

// 모든 IP에서 공통 prefix 길이 찾기
let mask = 0;
for (let bit = 31; bit >= 0; bit--) {
  const curBit = (ips[0] >> bit) & 1;
  let same = true;

  for (let i = 1; i < N; i++) {
    if (((ips[i] >> bit) & 1) !== curBit) {
      same = false;
      break;
    }
  }

  if (!same) break;
  mask |= (1 << bit);
}

// 네트워크 주소
const network = ips[0] & mask;

console.log(intToIp(network));
console.log(intToIp(mask));
