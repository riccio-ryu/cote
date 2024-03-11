// dfs
function solution(maze) {
    let answer = 0;
    const n = maze.length
    const m = maze[0].length
    const pos = [null, null, null, null];
    const goal = [null, null, null, null];
    const redVisited = new Array(n).fill().map(_ => new Array(m).fill(false));
    const blueVisited = new Array(n).fill().map(_ => new Array(m).fill(false));
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    // console.log(redVisited)
    // 초기화
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < m; j += 1) {
            if (maze[i][j] === 1) {   // red start
                pos[0] = i;
                pos[1] = j;
                redVisited[i][j] = true;
            } else if (maze[i][j] === 2) {    // blue start
                pos[2] = i;
                pos[3] = j;
                blueVisited[i][j] = true;
            } else if (maze[i][j] === 3) {    // red goal
                goal[0] = i;
                goal[1] = j;
            } else if (maze[i][j] === 4) {    // blue goal
                goal[2] = i;
                goal[3] = j;
            }
        }
    }
    
    const recursive = ([rx, ry, bx, by], cnt) => {
        if (rx === goal[0] && ry === goal[1] && bx === goal[2] && by === goal[3]){
            return cnt;
        }

        const redMoves = rx === goal[0] && ry === goal[1] ? [[rx, ry]] : colorMove(rx, ry, true);
        const blueMoves = bx === goal[2] && by === goal[3] ? [[bx, by]] : colorMove(bx, by, false);

        const min = [Infinity];

        for (const [rmx, rmy] of redMoves) {
            for (const [bmx, bmy] of blueMoves) {
                if (!(rmx === bx && rmy === by && bmx === rx && bmy === ry) && !(rmx === bmx && rmy === bmy)) {
                    // console.log([rx, ry, bx, by], cnt, min, redVisited, blueVisited)
                    redVisited[rmx][rmy] = true;
                    blueVisited[bmx][bmy] = true;
                    min.push(recursive([rmx, rmy, bmx, bmy], cnt + 1));
                    redVisited[rmx][rmy] = false;
                    blueVisited[bmx][bmy] = false;
                }
            }
        }
        return Math.min(...min);
  };
    
    const colorMove = (x, y, bool) => {
        // console.log(x,y,bool)
        const v = bool ? redVisited : blueVisited
        const arr = []
        for(const [dx, dy] of moves){
            const [nx, ny] = [dx+x, dy+y]
            // console.log(nx, ny)
            if(nx >= 0 && nx < n && ny >= 0 && ny < m && maze[nx][ny] !== 5 && !v[nx][ny]){
                arr.push([nx, ny])
            }
        }
        return arr
    }
    const result = recursive(pos, 0);

    return result === Infinity ? 0 : result;
}
