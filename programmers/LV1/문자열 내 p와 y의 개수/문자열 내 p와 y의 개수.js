function solution(s){
    let answer = true;
    const low = s.toLowerCase().split('');
    let cntP = 0;
    let cntY = 0;
    low.filter(x => {
        if(x === 'p') cntP += 1;
        if(x === 'y') cntY += 1;
    })
    answer = cntP === cntY ? true : false
    return answer;
}

/*
function solution(s) {
  const countP = [...s.matchAll(/p/gi)].length;
  const countY = [...s.matchAll(/y/gi)].length;
  return countP === countY;
}
*/
