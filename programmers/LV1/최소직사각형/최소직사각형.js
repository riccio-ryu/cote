// 2023.08.18
function solution(sizes) {
    
    for(s of sizes){
        if(s[0] < s[1]) [s[0], s[1]] = [s[1], s[0]]
    }
    const max0 = Math.max(...sizes.map((c) => c[0]))
    const max1 = Math.max(...sizes.map((c) => c[1]))
    // console.log(max0, max1)
    return max0 * max1;
}

// 2022
/*
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
*/

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
/*
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
*/
