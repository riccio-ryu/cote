//2023
function solution(board, moves) {
    const arr = [];
    let answer = 0;
    moves.forEach(m => {
        for(let i = 0; i < board.length; i++){
            const c = board[i][m-1];
            if(c !== 0){
                if(c === arr.slice(-1)[0]){
                    arr.pop()
                    answer += 2;
                }else{
                    arr.push(c)
                }
                board[i][m-1] = 0
                break;
            }
        }
    })
    return answer;
}

//2022
function solution(board, moves) {//b: [[],[]], m:[n,n,n], retern: dis num
    let basket =[];
    let boom = 0;
    moves.forEach(move => {
        for(let i =0; i< board.length; i++){
            const thing = board[i][move-1];
            if(thing !== 0){
                if(thing === basket[basket.length - 1]){
                    basket.pop()
                    boom += 2
                }else{
                    basket.push(thing)
                }
                board[i][move-1] = 0
                break;
            }
        }
    })
    return boom;
}
