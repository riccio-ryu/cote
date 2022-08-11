function solution(sizes) {
    let answer = 0;
    let rw = 0;
    let rh = 0;
    //회전...sort
    for(let i = 0; i< sizes.length; i++){
        sizes[i].sort((a,b) => a-b);
        if(rw < sizes[i][0]){//w 가 크면
            rw = sizes[i][0]
        }
        if(rh < sizes[i][1]){//h 가 크면
            rh = sizes[i][1]
        }
    }
    return rw * rh;
}

/*
function solution(sizes) {

  for (let card of sizes) {
    if (card[0] < card[1]) [card[0], card[1]] = [card[1], card[0]];
  }

  const maxWidth = Math.max(...sizes.map((card) => card[0]));
  const maxHeight = Math.max(...sizes.map((card) => card[1]));
  return maxWidth * maxHeight;
}
*/
