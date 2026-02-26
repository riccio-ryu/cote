// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split(' ');
let N = parseInt(input[0]); // 여학생
let M = parseInt(input[1]); // 남학생
let K = parseInt(input[2]); // 인턴십 인원

let teams = 0;
// console.log(`초기 상태: N=${N}, M=${M}, K=${K}, teams=${teams}`);
while (N >= 2 && M >= 1) {
    N -= 2;
    M -= 1;
    teams++;
}
// console.log(`팀 구성 후 상태: N=${N}, M=${M}, K=${K}, teams=${teams}`);
while (N + M < K) {
    teams--;
    N += 2;
    M += 1;
}

// console.log(`최종 상태: N=${N}, M=${M}, K=${K}, teams=${teams}`);
console.log(teams < 0 ? 0 : teams);
