function solution(today, terms, privacies) {
    let answer = [];
    let term = new Map()
    terms.forEach(t => {
        const v = t.split(' ')
        term.set(v[0], +v[1])
    })
    privacies.forEach((p, i) => {
        let [date, type] = p.split(' ')
        if(check(today, date, term.get(type))) answer.push(i+1)
        // console.log(date, type)
    })
    // console.log(term)
    return answer;
}

function check(today, date, validity) {
  let [y1, m1, d1] = today.split('.').map(Number),
      [y2, m2, d2] = date.split('.').map(Number);
  return ((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= validity * 28;
    //연차를 뺀것을 열두달로 달로변경 + 달합산
    //총 달에 대해서 28일로 곱하고 + 일차
    // 계산된 값이 terms의 계월 * 28일 이상이면 true
}

/*
처음에는 today를 new Date로 진행하고 나머지에 대해서도 new Date에 반영하려는방식으로 가려 했으나
굳이 그럴 필요가 있을까에 대한 고민을 하고 함수로 만들어서 전달 받은 값을 비교만해도 충분할것 같았다
*/
