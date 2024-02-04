// 2024

// start :: maps[0][0], end :: maps[maps.length-1][maps[maps.length-1].length-1]
function solution(maps) {
    // console.log(maps[maps.length-1][maps[maps.length-1].length-1])
    const n = maps.length-1
    const m = maps[0].length-1
//     start [0,0] // end [n,m] //y,x
    return dfs([0,0], [n,m], [...maps])
}

const dfs = (start, end, map) => {
    let w = 1   // 움직인칸
    const dx = [-1, 1, 0, 0];   //좌 우 하 상
    const dy = [0, 0, -1, 1];
    const q = [start]            // 남은 위치
    const [endy, endx] = end
    map[start[0]][start[1]] = 0 // 시작 위치 방문했다
    // console.log(endx, endy)
    while(q.length){
        let size = q.length
        for(let i = 0; i < size; i++){
            const [y,x] = q.shift()
            for(let j = 0; j < 4; j++){
                let nx = x + dx[j]
                let ny = y + dy[j]
                // console.log('xy ', x,y, 'nx ', nx, 'ny ', ny)
                if(nx >= 0 && nx <= endx && ny >= 0 && ny <= endy && map[ny][nx] !== 0) {
                    // console.log('a ', map[ny][nx], [ny,nx], end)
                    if(ny === end[0] && nx === end[1]) {
                        // console.log('arrived ', w)
                         return w+1;
                    }
                    
                    q.push([ny, nx]);
                    map[ny][nx] = 0;
                }
            }
        }
        w++
    }
    return -1
}
