function solution(arr1, arr2) {
    let answer = new Array(arr1.length);
    for(let i =0; i<arr1.length;i++){
        answer[i] = new Array(arr1[0].length)
    }
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j<arr1[0].length;j++){
            answer[i][j] = (arr1[i][j]+arr2[i][j])
        }
    }
    return answer;
}

/*
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]));
  });
  return answer;
}
*/
