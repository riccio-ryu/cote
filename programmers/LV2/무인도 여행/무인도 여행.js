//2023
// 2차 시도, 통과
function solution(maps) {
    const answer = [];
    const nm = maps.map(m => m.split(''))
    const [h,v] = [nm.length, nm[0].length]
    const visited = Array.from({ length: h }, () => Array(v).fill(false));
    for(let i = 0; i < h; i++){
        for(let j = 0; j < v; j++){
            // console.log(i,j, nm[i][j])
            if(!visited[i][j] && nm[i][j] !== 'X'){
                // console.log(bfs(i,j,nm))
                answer.push(bfs(i,j,nm,visited))
            }
        }
    }
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
function bfs(i,j, m,v){
    // console.log(i,j,m)
    const q = [[i,j]]
    let cnt = 0;
    const dx = [-1, 1, 0, 0];     // 상하좌우 행열 좌표
    const dy = [0, 0, -1, 1];
    
    while(q.length){
        let [x,y] = q.shift();
        // console.log('m', m[x][y],typeof(+m[x][y]))
        v[x][y] = true;
        // const val = +m[x][y]
        cnt += +m[x][y]
        // console.log('cnt',cnt)
        for(let k = 0; k < 4; k++){
            const nx = x + dx[k];
            const ny = y + dy[k];
            
            if(nx<0 || ny<0 || nx >= m.length || ny >= m[0].length || v[nx][ny] || m[nx][ny] ==='X') continue
            q.push([nx, ny])
            v[nx][ny] = true;
        }
    }
    return cnt
}

// 해결 방법 :: false로 이루어진 배열을 두어 방문했는지를 판단하게 하였다.
// 기존에는 'V'로 바꿨는데 여기서 시간이 오래 걸리는것 같다. 방문했으면 방문 안하게 해보았다.

// 1차 시도, 44.0 / 100.0
// 틀린 사유:: 틀린 부분 시간 초과
function solution(maps) {
    const answer = [];
    const nm = maps.map(m => m.split(''))
    const [h,v] = [nm.length, nm[0].length]
    for(let i = 0; i < h; i++){
        for(let j = 0; j < v; j++){
            // console.log(i,j, nm[i][j])
            if(nm[i][j] !== 'V' && nm[i][j] !== 'X'){
                // console.log(bfs(i,j,nm))
                answer.push(bfs(i,j,nm))
            }
        }
    }
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
function bfs(i,j, m){
    // console.log(i,j,m)
    const q = [[i,j]]
    let cnt = 0;
    const dx = [-1, 1, 0, 0];     // 상하좌우 행열 좌표
    const dy = [0, 0, -1, 1];
    
    while(q.length){
        let [x,y] = q.shift();
        // console.log('m', m[x][y],typeof(+m[x][y]))
        const val = +m[x][y]
        cnt += (val ? val : 0)
        m[x][y] = 'V'
        // console.log('cnt',cnt)
        for(let k = 0; k < 4; k++){
            const nx = x + dx[k];
            const ny = y + dy[k];
            
            if(nx<0 || ny<0 || nx >= m.length || ny >= m[0].length || m[nx][ny] ==='V' || m[nx][ny] ==='X') continue
            q.push([nx, ny])
            // m[nx][ny] = 'V'
        }
    }
    return cnt
}
