// 2024

// https://hstory0208.tistory.com/entry/javascripts-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%A0%95%EC%82%AC%EA%B0%81%ED%98%95-%EC%B0%BE%EA%B8%B0
// 못풀었다...
function solution(board)
{
    let answer = 0;
    const row = board.length;
    const column = board[0].length;
  
    if (row <= 1 || column <= 1) return 1;  // 예외 처리
  
    for (let i = 1; i < row; i++) { // 1행부터 시작
      for (let j = 1; j < column; j++) { // 1열부터 시작
        if (board[i][j] > 0) { 
          const up = board[i - 1][j]; 
          const left = board[i][j - 1];
          const cross = board[i - 1][j - 1];
          const minNum = Math.min(up, left, cross); // 3개의 값 중 가장 작은 값
 
          board[i][j] = minNum + 1; 
 
          console.log(board[i][j]);
 
          answer = Math.max(answer, board[i][j]); 
        }
      }
    }
  
    return answer **2; 
}
