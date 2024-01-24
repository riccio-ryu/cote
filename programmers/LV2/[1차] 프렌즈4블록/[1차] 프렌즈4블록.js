//2024
// 다시 정리하는데 시간이 더걸림.,.. 처음부터 잘만들자... 1시간 이상
function solution(m, n, board) {
    board = board.map(b => b.split(''))
    
    while(true){
        let arr = []
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    arr.push([i, j]);
                }
            }
        }
        if (! arr.length) return [].concat(...board).filter(v => ! v).length;   // arr가 비어있으면 숫자 세서 리턴
        
        arr.forEach(a => {  // arr기반 2x2 0으로 변경
            board[a[0]][a[1]] = 0
            board[a[0]][a[1]-1] = 0
            board[a[0]-1][a[1]] = 0
            board[a[0]-1][a[1]-1] = 0
        })
        
        // console.log('1', arr, board)
        for (let i = m - 1; i > 0; i--) {   // 다시 줄새우기
            // console.log(board[i], board[i].some(v => ! v))
            if (! board[i].some(v => ! v)) continue;    // 0이 없으면 패스

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) { //i는 현재, j는 현재의 배열의 0부터, k는 위를 훑어 본다.0이 아닐때까지
                    if (board[k][j]) {  // 위치 변경
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        // console.log(board)
                        break;
                    }
                }
            }
        }
        // console.log(arr, board)
        // break
    }
}

// 출력내용이 너무 길다고 한다.
function solution(m, n, board) {
    let answer = 0;
    board = board.map(b => b.split(''))
    const shoot = (board) => {
        const copy = [...board]
        for(let i = 0; i < copy.length-1; i++){
            for(let j = 0; j < copy[0].length-1; j++){
                const [f1,f2,f3,f4] = [copy[i][j].toUpperCase(), copy[i][j+1].toUpperCase(), copy[i+1][j].toUpperCase(), copy[i+1][j+1].toUpperCase()]
                if(f1 === f2 && f1 === f3 && f1 === f4) {
                    copy[i][j] = copy[i][j].toLowerCase()
                    copy[i][j+1] = copy[i][j+1].toLowerCase()
                    copy[i+1][j] = copy[i+1][j].toLowerCase()
                    copy[i+1][j+1] = copy[i+1][j+1].toLowerCase()
                }
            }
        }
        for(let k = m-1; k >= 0; k--){
            for(let l = 0; l < n; l++){
                if(copy[k][l].match(new RegExp(/^[a-z]/)) !== null){
                    //소문자다 answer++
                    let str = ''
                    let cnt = k-1
                    while(!str.length){
                        // console.log(k, cnt)
                        if(cnt === -1 || copy[cnt][l].match(new RegExp(/^[a-z]/)) === null) break
                        cnt--
                    }
                    // console.log(cnt, copy[cnt][l])
                    copy[k][l] = cnt > -1 ? copy[cnt][l] : '0'
                    copy[k-1][l] = '0'
                    copy[k-2][l] = '0'
                    answer += 2
                    // console.log(copy)
                }
            }
        }
        return shoot(copy)
    }
    shoot(board)
    // console.log('board = ', board, shoot(board))
    return answer;
}
