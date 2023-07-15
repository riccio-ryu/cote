function solution(s) {
    let answer = [];
    let sp = s.split('')
    let book = new Map();
    
    sp.map((x,i) => {
        // console.log(x,i)
        // console.log(book, x, i)
        if(!book.has(x)){
            answer.push(-1)
        }else{
            answer.push(i - book.get(x))
        }
        // console.log(answer)
        book.set(x, i)
    })
    return answer;
}
