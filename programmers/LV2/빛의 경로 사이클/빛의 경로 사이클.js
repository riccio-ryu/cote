// 코테중 가장 어려웠던 문제, 정답을 보니 이해가 갔다 
// https://school.programmers.co.kr/questions/44580
function solution(grid) {
    let answer = [];
    const [row, col] = [grid.length, grid[0].length]
    let arr = new Array(row).fill().map((_) => new Array(col).fill().map((_) => new Array(4).fill(0))); // [row[col[d]]]
    const d = [[1, 0], [0, -1], [-1, 0], [0, 1]]; // [Down, Left, Up, Right] 
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            for(let k = 0; k < d.length; k++){
                // console.log(i,j,k,arr[i][j][k])
                if(arr[i][j][k]) continue
                let sp = [i,j,k]        // 시작점
                let [x,y,z] = [i,j,k]   // x,y 현재좌표, z는 다음 이동 방향
                let cnt = 0             // count
                
                while(true){
                    if(arr[x][y][z]){   // 방문한 경로 판별
                        if(sp[0] === x && sp[1] === y && sp[2] === z){  // 시작과 끝 같을 경우에만
                            answer.push(cnt)
                        }
                        break
                    }
                    arr[x][y][z] = 1 //방문 표시
                    
                    let [nx, ny] = [x + d[z][0], y + d[z][1]]
                    
                    if(nx < 0) nx = row - 1
                    else if(nx >= row) nx = 0
                    if(ny < 0) ny = col - 1
                    else if(ny >= col) ny = 0
                    
                    if (grid[nx][ny] === 'R') z = z + 1 > 3 ? 0 : z + 1;
                    else if (grid[nx][ny] === 'L') z = z - 1 < 0 ? 3 : z - 1;
                    
                    [x,y] = [nx, ny]
                    cnt++
                }
            }
        }
    }
    // console.log(row, col, arr)
    return answer.sort((a,b) => a - b);
}
