// 2023

// 두번째
// 보내는 배열을 두개로 두어야 한다 : l까지 갈때 지나간 길을 x처리 하는데 (거리 가까워야해서), 그것을 그대로 써서 생기는 문제 같다.
function solution(maps) {
    let posNow = [];        // 현재 위치
    let posLev = [];        // 레버 위치
    let posEnd = [];        // 출구 위치
    
    const map1 = maps.map(m => m.split(''))
    const map2 = maps.map(m => m.split(''))
    for(let i = 0; i < map1.length; i++){
        for(let j = 0; j < map1[i].length; j++){
            if(map1[i][j] === 'S') posNow = [i,j]
            if(map1[i][j] === 'L') posLev = [i,j]
            if(map1[i][j] === 'E') posEnd = [i,j]
        }
    }
    const sl = d(posNow, 'L', [...map1])
    const le = d(posLev, 'E', [...map2])
    // console.log(posNow, posLev, posEnd)
    return (sl === -1 || le === -1) ? -1 : sl + le;
}

// 아 bfs일것으로 예상
// 걸린 시간 리턴
function d(start, end, arr){
    let time = 0;                 // 걸리는 시간
    const dx = [-1, 1, 0, 0];     // 상하좌우 행열 좌표
    const dy = [0, 0, -1, 1];
    const q = [start];         
    const n = arr.length;          // 좌표 값의 범위를 제한하는 n, m
    const m = arr[0].length;   
    arr[start[0]][start[1]] = 'X'; // 시작 위치를 막기
    
    // 8) 너비탐색(BFS) 
    while(q.length > 0) {
        let size = q.length;
        for(let i=0; i<size; i++) {
            const [x, y] = q.shift();
           
            for(let j=0; j<4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] !== 'X') {
                    
                    if(arr[nx][ny] === end) {
                         return time+1;
                    }
                    
                    q.push([nx, ny]);
                    arr[nx][ny] = 'X';
                }
            }
        }
        
        time++;
    }
    
    return -1;
}

// 첫번째 합계: 39.1 / 100.0 
// 예상 문제점 d함수로 보내는 maps가 x로 변질 되어서 그런게 아닐까... maps를 복제를 떠보자
function solution(maps) {
    let posNow = [];        // 현재 위치
    let posLev = [];        // 레버 위치
    let posEnd = [];        // 출구 위치
    
    maps = maps.map(m => m.split(''))
    
    for(let i = 0; i < maps.length; i++){
        for(let j = 0; j < maps[i].length; j++){
            if(maps[i][j] === 'S') posNow = [i,j]
            if(maps[i][j] === 'L') posLev = [i,j]
            if(maps[i][j] === 'E') posEnd = [i,j]
        }
    }
    const sl = d(posNow, 'L', [...maps])
    const le = d(posLev, 'E', [...maps])
    // console.log(posNow, posLev, posEnd)
    return sl === -1 || le === -1 ? -1 : sl + le;
}

// 아 bfs일것으로 예상
// 걸린 시간 리턴
function d(start, end, arr){
    let time = 0;                 // 걸리는 시간
    const dx = [-1, 1, 0, 0];     // 상하좌우 행열 좌표
    const dy = [0, 0, -1, 1];
    const q = [start];         
    const n = arr.length;          // 좌표 값의 범위를 제한하는 n, m
    const m = arr[0].length;   
    arr[start[0]][start[1]] = 'X'; // 시작 위치를 막기
    
    // 8) 너비탐색(BFS) 
    while(q.length > 0) {
        let size = q.length;
        for(let i=0; i<size; i++) {
            const [x, y] = q.shift();
           
            for(let j=0; j<4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] !== 'X') {
                    
                    if(arr[nx][ny] === end) {
                         return time+1;
                    }
                    
                    q.push([nx, ny]);
                    arr[nx][ny] = 'X';
                }
            }
        }
        
        time++;
    }
    
    return -1;
}
