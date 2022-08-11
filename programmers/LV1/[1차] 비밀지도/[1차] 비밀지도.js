function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < n; i++){
        const ju1 = arr1[i].toString(2);
        const ju2 = arr2[i].toString(2);
        const sum = String(+ju1 + +ju2).padStart(n,0).split('');
        let con = '';
        for(let j = 0; j < sum.length; j++){
            if(+sum[j] > 0){
                con += '#'
            }else{
                con += ' '
            }
        }
            answer.push(con)
    }
    return answer;
}

//진수 까먹지 말자 ㅜㅜ
/*
function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    let row = (arr1[i] | arr2[i]).toString(2); //Bitwise
    row = "0".repeat(n - row.length) + row;
    row = row.replace(/[10]/g, (a) => (+a ? "#" : " "));
    answer.push(row);
  }
  return answer;
}
*/
