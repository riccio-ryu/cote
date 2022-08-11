function solution(dartResult) {
    let answer = 0;
    let score = 0;
    let arr =[]
    const dart = dartResult.split('')
    for(let i = 0; i < dart.length; i++){
        if(!isNaN(dart[i])){
            //number
            score = +dart[i-1] === 1 ? 10 : +dart[i];
        }else if(dart[i] === 'S'){
            arr.push(score);
        }else if(dart[i] === 'D'){
            arr.push(Math.pow(score,2));
        }else if(dart[i] === 'T'){
            arr.push(Math.pow(score,3));
        }else if(dart[i] === '*'){
            arr[arr.length-2] = arr[arr.length-2] * 2;
            arr[arr.length-1] = arr[arr.length-1] * 2
        }else if(dart[i] === '#'){
            arr[arr.length-1] = arr[arr.length-1] * (-1)
        }
    }
    answer = arr[0]+arr[1]+arr[2]
    return answer;
}

/*
function solution(dartResult) {
  const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
  let result = [];
  for (const dart of dartResult.match(regex)) {
    const game = [...dart.split(/([SDT]{1})/)];
    const score = game[0];
    let bonus = 1;
    let option = 1;
    if (game[1] === "S") bonus = 1;
    if (game[1] === "D") bonus = 2;
    if (game[1] === "T") bonus = 3;

    if (game[2] === "*") {
      if (result.length !== 0) result[result.length - 1] *= 2;
      option = 2;
    }
    if (game[2] === "#") option = -1;

    result.push(score ** bonus * option);
  }

  return result.reduce((a, b) => a + b);
}
*/
