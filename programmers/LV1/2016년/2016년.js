function solution(a, b) {
    let week = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    //a 1 b 1 'fri'
    let mon = 0;
    let days = 0;
    for(let i = 1; i < a;i++){
        if(i === 2){
            mon += 29
        }else if(i % 2 === 1){
            mon += 31
        }else{
            mon += 30
        }
    }
    days = mon + b
    return week[(days % 7)];
}

// 테스트 13 실패.

/*
function solution(a, b) {
  let count = 0;
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 1; i < a; i++) count += month[i];
  count += b;
  return day[(count + 4) % 7]; // 금요일 부터 1일 이므로
}
*/
