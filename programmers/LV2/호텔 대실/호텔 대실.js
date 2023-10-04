//2023

function solution(book_time) {
    let answer = [];
    const book = []
    book_time.sort().map(b => {
        let [s,e] = b
        let [sh, sm] = s.split(':')
        let [eh, em] = e.split(':')
        s = parseInt(sh)*60 + parseInt(sm)
        e = parseInt(eh)*60 + parseInt(em)
        book.push([s,e])
    })
    
    book.map(b => {
        const [s,e] = b
        // console.log(s,e)
        if(!answer.length){
            answer.push(e+10)
        }else{
            answer = answer.sort()  // 낮은순으로 재정렬
            let f = true;
            for(let i = 0; i < answer.length; i++){
                // answer에서 시작시간 이하인 끝시간+10인것을 찾아서 바꾼다.
                if(answer[i] <= s){
                    answer[i] = e+10
                    f=false
                    break
                }
            }
            if(f) answer.push(e+10)
        }
    })
    // console.log(book)
    return answer.length;
}
