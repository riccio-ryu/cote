function solution(answers) {
    let answer = [];    //가장 높은 점수를 받은... 
    let first = [1, 2, 3, 4, 5]
    let second = [2, 1, 2, 3, 2, 4, 2, 5]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let firstCnt =0;
    let secondCnt =0;
    let thirdCnt =0;
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === first[i%first.length]) firstCnt += 1;
        if(answers[i] === second[i%second.length]) secondCnt += 1;
        if(answers[i] === third[i%third.length]) thirdCnt += 1;
    }
    
    const val = Math.max(firstCnt, secondCnt, thirdCnt)
    if(val === firstCnt) answer.push(1)
    if(val === secondCnt) answer.push(2)
    if(val === thirdCnt) answer.push(3)
    
    return answer;
}


/*
function solution(answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    for (let j = 0; j < pattern.length; j++) {
      const patternLength = pattern[j].length;
      if (answer === pattern[j][i % patternLength]) scores[j]++;
    }
  });

  const answer = [];
  const maxScore = Math.max(...scores);
  scores.forEach((score, i) => {
    if (score === maxScore) answer.push(i + 1);
  });
  return answer;
}
*/
/*
function solution(answers) {
  const answer = [];
  const firstPattern = [1, 2, 3, 4, 5];
  const firstPLength = firstPattern.length;
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const secondPLength = secondPattern.length;
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const thirdLength = thirdPattern.length;
  let correctCount = [0, 0, 0];

  for (let i = 0, len = answers.length; i < len; i++) {
    if (answers[i] === firstPattern[i % firstPLength]) correctCount[0] += 1;
    if (answers[i] === secondPattern[i % secondPLength]) correctCount[1] += 1;
    if (answers[i] === thirdPattern[i % thirdLength]) correctCount[2] += 1;
  }

  const maxScore = Math.max(...correctCount);
  for (let i = 0; i < 3; i++) {
    if (correctCount[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}
*/

/*
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
*/
