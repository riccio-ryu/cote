// 2026

 // ***** "예제 출력과 똑같이 나오게 만드는 것"이 목표가 아니라, **"문제의 조건(LIS=M, LDS=K)을 만족하는 아무 수열이나 하나 만드는 것"**이 이 문제의 진짜 목표입니다. 님이 이해하신 그 로직이 가장 효율적이고 정석적인 풀이법이니 안심하고 제출하셔도 됩니다!
// 헷갈리는 부분

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split(' ').map(Number);

const [N, M, K] = input;
// console.log(N,M,K);
if (M + K - 1 > N || N > M * K) {
    console.log(-1);
    process.exit();
}

let result = [];
let nums = Array.from({ length: N }, (_, i) => i + 1);

let groupSizes = new Array(M).fill(1);
groupSizes[0] = K;

let remainCount = N - (M + K - 1);
// console.log(groupSizes , remainCount);
for (let i = 1; i < M && remainCount > 0; i++) {
    let add = Math.min(remainCount, K - 1);
    groupSizes[i] += add;
    remainCount -= add;
    // console.log(groupSizes , remainCount, ' // ', add);
}
// console.log(groupSizes , remainCount);

let currentIdx = 0;
for (let size of groupSizes) {
    // console.log('-f-', size, nums);
    let temp = [];
    for (let i = 0; i < size; i++) {
        temp.push(nums[currentIdx + i]);
    }
    // console.log('temp', temp)
    result.push(...temp.reverse());
    currentIdx += size;
}

console.log(result.join(' '));
