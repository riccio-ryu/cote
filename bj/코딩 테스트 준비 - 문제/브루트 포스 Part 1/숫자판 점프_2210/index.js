// 2025

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(line => line.split(" ").map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const result = new Set();

function dfs(x, y, str) {
    if (str.length === 6) {
        result.add(str);
        return;
    }
    for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
            dfs(nx, ny, str + input[nx][ny]);
        }
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        dfs(i, j, String(input[i][j]));
    }
}

console.log(result.size);
