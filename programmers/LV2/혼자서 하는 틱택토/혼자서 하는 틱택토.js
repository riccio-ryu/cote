// 2023

// 두번째 :: 성공
function solution(board) {
    board = board.map((element)=>{
        return element.split(""); 
    });

    let nO = 0;
    let nX = 0;
    for(let y =0;y<3;y++){
        for(let x = 0;x<3;x++){
            if(board[y][x] === "O"){
                nO ++;
            }
            if(board[y][x] === "X"){
                nX ++;
            }
        } 
    }
    
    // 1이 되는 상황을 찾자
    if(nO < nX){          // x가 많은 상황
        return 0;
    }
    // 승리후 진행여부
    if(nO === nX){          // 두 수가 같을때, o에서 이미 승리했음?
        // 만약 이미 승리 했다면? 0
        if(!v(board, 'O')) return 1
    }
    if(nO === nX+1){        // 만약 O와 X가 한개 차이라면
        // x가 한개 적은데, 게임이 끝이면은 x가 승리되면 안됨
        if(!v(board, 'X')) return 1
    }
    
    return 0;   // 그 외에는 0
}

//check function
function v(board, ann){
    //가로 체크
    for(var y = 0; y<3; y++){
        if(board[y][0] === ann && board[y][1] === ann && board[y][2] === ann) return true
    }

    // 세로 체크
    for(var x = 0; x<3; x++){
      if(board[0][x] === ann && board[1][x] === ann && board[2][x] === ann) return true
    }

    //대각선 체크
    if(board[0][0] == ann && board[1][1] == ann && board[2][2] == ann) return true
    if(board[0][2] == ann && board[1][1] == ann && board[2][0] == ann) return true

    return false;
}

// 첫번째 풀이 :: 채점 결과 , 정확성: 44.4, 합계: 44.4 / 100.0
// 예상 문제점 ? 아마도 승리 (O나 X 중) 하고도 게임을 진행하지 않았을까?
function solution(board) {
    let answer = 1;
    let numO = 0;
    let numX = 0;
    const boards = board.map(b => b.split('')).flat()
    boards.filter(b => b==='O' ? numO++ : '')
    boards.filter(b => b==='X' ? numX++ : '')
    if(boards.length > 9) return 0                  // board의 수가 9보다 크면 0
    if(numO === 0 && numX === 0) return 1;          // 둘 다 0이면 1
    if(numO !== numX && numO !== numX+1) return 0;  // x의 갯수와 o의 갯수가 맞지 않으면 0 -> x는 o이하
    
    if(numO > 2 || numX > 2){                       // 3자리수 가로 세로 대각선 체크
        // 가로 board[i] 에 있는 문자열의 문자가 다 같다
        // 세로 board[i][j] j의 0,1,2에 있는 문자가 다 같다
        // 대각선 board[0][0], board[1][1], board[2][2] 혹은 board[0][2], board[1][1], board[2][0] 의 문자가 같다
        let cnt = 0;
        for(let i = 0; i < 3; i++){//가로
            if(board[i][0] !== '.' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) cnt++
        }
        for(let j = 0; j < 3; j++){//세로
            if(board[0][j] !== '.' && board[0][j] === board[1][j] && board[0][j] === board[2][j]) cnt++
        }
        if(board[0][0] !== '.' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) cnt++
        if(board[2][2] !== '.' && board[2][2] === board[1][1] && board[2][2] === board[2][0]) cnt++
        if(cnt > 1) return 0
    }
    return answer;
}
