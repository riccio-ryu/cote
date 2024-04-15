// 2024
/*
d l r u

dfs?
*/
function solution(n, m, x, y, r, c, k) {
    let answer = 'z'.repeat(k);
    let grid = Array.from({ length: n + 1 }, () => new Array(m + 1).fill("."));

    grid[x][y] = "S";
    grid[r][c] = "E";
    let absAnswer = k - (Math.abs(x - r) + Math.abs(y - c));
    if (absAnswer < 0 || absAnswer % 2 != 0) return "impossible";
    
    const dx = [0,-1,1,0]       //d, l, r, u
    const dy = [1,0,0,-1]       //d, l, r, u
    const str = {0: "d",1: "l",2: "r",3: "u"}
    
    function dfs(L, py, px, sum, dist) {
        // console.log(L, py, px, sum, dist, 'test : ', answer, answer > sum)
        if (L > k) return;
        if (dist > k) return; // 현재 거리가 목표지점에서 멀어지면 멈춘다.
        if (L === k && py === r && px === c) {
            if (answer > sum) {
                answer = sum;
                return;
            }
        }
        // console.log('middddd ', answer)
        if (answer !== "z".repeat(k)) return;

        for (let i = 0; i < 4; i++) {
            let ny = py + dy[i];
            let nx = px + dx[i];

            // 편의상 index 0을 제거했으므로 ny, nx도 0보다 크거나 같은 게 아니라 무조건 커야 한다.
            if (ny <= n && ny > 0 && nx <= m && nx > 0) {
                // console.log(ny, nx, sum + str[i]);

                dfs(L + 1, ny, nx, sum + str[i], Math.abs(ny - r) + Math.abs(nx - c) + L + 1);
            }
        }
    }
    dfs(0, x, y, "", k);
    
    if (answer === "z".repeat(k)) return "impossible";
    return answer;
}
