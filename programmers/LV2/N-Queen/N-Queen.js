// 2024

// 아 어렵다.. 다시 풀어보귀

// 가로 비교, 세로 비교, 대각산 비교
/*
xooo
oxoo
oooo
oooo
[0,1,2,0,0] 1 => (x:1 y:1) 2 => (x: 2 y: 2)
x1 - x2 === y1 - y2
*/
function solution(n) {
    let answer = 0;
    const dfs = (board, r) => { // r은 줄(첫줄부터 내려간다)
        if(r === n) return answer++;
        // { console.log('~~~~~~',answer, board, r) }   // 줄이 다 돌아 섰다면(r === n, board의 1~n까지는 숫자로 차야함)
        else{
            for(let i = 1; i <=n; i++){
                board[r+1] = i;
                if(ch(board, r+1)) dfs(board, r+1)
            }
        }
    }
    const ch = (board, r) => {
        // console.log('ch', board)
        for(let i = 1; i < r; i++){ //세로만큼 돈다고 생각하자
            // console.log('ib' ,i, r, board[i] , board[r])
            if(board[i] === board[r]) return false  // 가로 비교, 
            if(Math.abs(board[i] - board[r]) === Math.abs(i - r)) return false  // 대각선 비교
        }
        // console.log('true : ', board, r)
        return true;
    }
    for(let i = 1; i <=n; i++){ // 0index는 사용안함, board는 n만큼의 가능
        const board = new Array(n+1).fill(0)
        board[1] = i
        // console.log(board)
        dfs(board, 1)
    }
    return answer;
}
