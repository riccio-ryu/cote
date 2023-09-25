//2023

// 한 두시간 푼것 같다;;; 넘무 복잡하고
function solution(board) {
    let answer = 0;
    board = board.map(b => b.split('')) //이중 배열
    const pos = []        // 위치
    const v = board[0].length
    const h = board.length
    const dx = [0,0,-1,1]   //상하좌우 x
    const dy = [1,-1,0,0]   //상하좌우 y
    // console.log(v,h)
    board.forEach((b,i) => {
        b.forEach((b2,j) => {
            if(b2 === 'R') pos.push([i,j])
        })
    })
    board[pos[0][0]][pos[0][1]] = 'V';    // 방문한 곳이라면 V
    // console.log(pos)
    while(pos.length){
        //pos의 좌표가 없으면 그만 돌리게끔
        const l = pos.length;
        for(let i = 0; i <l ;i++){  //길이만큼 확인
            let [x,y] = pos.shift()
            // console.log(x, y)
            for(let j = 0; j < 4; j++){ // 상하좌우 확인 4
                // console.log(pos)
                //다음 위치 nx, ny
                let nx = x + dx[j];
                let ny = y + dy[j];
                // console.log('초기 nx ' , nx, ' ny ', ny, ' --- ', v, h, board[nx])
                // 한번 가는게 아니라 그쪽 방향으로 쭉간다.
                while(nx >= 0 && nx < h && ny >= 0 && ny < v && board[nx][ny] !== 'D') {
                    nx += dx[j];
                    ny += dy[j];
                }
                // console.log('nx ' , nx, ' ny ', ny)
                // 현재 위치
                nx -= dx[j];
                ny -= dy[j];
                // console.log('nx ' , nx, ' ny ', ny, pos)
                if(board[nx][ny] === 'G') return answer+1;
                if(board[nx][ny] !== 'V') {
                    // console.log('vvvv ', pos)
                    board[nx][ny] = 'V'
                    pos.push([nx, ny])
                }
            }
        }
        answer++
    }
    // console.log(pos)
    return -1;
}
