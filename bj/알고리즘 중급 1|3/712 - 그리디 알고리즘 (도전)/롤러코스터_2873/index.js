// 2026

// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(' ').map(Number));

// console.log(R, C, board);

let result = "";

if (R % 2 !== 0) {
    // Case 1: 행이 홀수
    for (let i = 0; i < R; i++) {
        let move = (i % 2 === 0) ? "R" : "L";
        result += move.repeat(C - 1);
        // console.log(' r 2 i ', i, ' move ', move, ' result ', result);
        if (i !== R - 1) result += "D";
    }
} else if (C % 2 !== 0) {
    // Case 2: 열이 홀수
    for (let i = 0; i < C; i++) {
        let move = (i % 2 === 0) ? "D" : "U";
        result += move.repeat(R - 1);
        // console.log(' c 2 i ', i, ' move ', move, ' result ', result);
        if (i !== C - 1) result += "R";
    }
} else {
    // Case 3: 둘 다 짝수 (최소 칸 하나 버리기)
    let minX = 0, minY = 1;
    let minVal = 1001;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if ((i + j) % 2 !== 0 && board[i][j] < minVal) {
                minVal = board[i][j];
                minX = i;
                minY = j;
                // console.log(' i ', i, ' j ', j, ' minVal ', minVal, ' minX ', minX, ' minY ', minY);
            }
        }
    }

    // 최소 칸이 있는 2행 묶음 이전까지
    let newR = Math.floor(minX / 2) * 2;
    for (let i = 0; i < newR; i++) {
        let move = (i % 2 === 0) ? "R" : "L";
        result += move.repeat(C - 1) + "D";
    }

    // 최소 칸이 있는 2행 묶음 처리
    let curX = newR;
    let curY = 0;
    let targetX = newR + 1;
    // console.log(' newR ', newR, ' curX ', curX, ' curY ', curY, ' targetX ', targetX, ' minY ', minY);
    while (curY < C - 1) {
        if (curY === minY) {
            result += "R";
            curY++;
        } else if (curY + 1 === minY) { // 다음 칸이 버릴 칸이면 아래로 먼저
            result += "DR";
            curY++;
        } else {
            result += "DRUR";
            curY += 2;
        }
    }
}
console.log(result);

/*
상근이는 우리나라에서 가장 유명한 놀이 공원을 운영하고 있다. 이 놀이 공원은 야외에 있고, 다양한 롤러코스터가 많이 있다.

어느 날 벤치에 앉아있던 상근이는 커다란 황금을 발견한 기분이 들었다. 자신의 눈 앞에 보이는 이 부지를 구매해서 롤러코스터를 만든다면, 세상에서 가장 재미있는 롤러코스터를 만들 수 있다고 생각했다.

이 부지는 직사각형 모양이고, 상근이는 R행 C열의 표 모양으로 나누었다. 롤러코스터는 가장 왼쪽 위 칸에서 시작할 것이고, 가장 오른쪽 아래 칸에서 도착할 것이다. 롤러코스터는 현재 있는 칸과 위, 아래, 왼쪽, 오른쪽으로 인접한 칸으로 이동할 수 있다. 각 칸은 한 번 방문할 수 있고, 방문하지 않은 칸이 있어도 된다.

각 칸에는 그 칸을 지나갈 때, 탑승자가 얻을 수 있는 기쁨을 나타낸 숫자가 적혀있다. 롤러코스터를 탄 사람이 얻을 수 있는 기쁨은 지나간 칸의 기쁨의 합이다. 가장 큰 기쁨을 주는 롤러코스터는 어떻게 움직여야 하는지를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 R과 C가 주어진다. (2 ≤ R, C ≤ 1000) 둘째 줄부터 R개 줄에는 각 칸을 지나갈 때 얻을 수 있는 기쁨이 주어진다. 이 값은 1000보다 작은 양의 정수이다.

출력
첫째 줄에 가장 가장 큰 기쁨을 주는 롤러코스터는 가장 왼쪽 위 칸부터 가장 오른쪽 아래 칸으로 어떻게 움직이면 되는지를 출력한다. 위는 U, 오른쪽은 R, 왼쪽은 L, 아래는 D로 출력한다. 정답은 여러 가지 일 수도 있다.
*/
