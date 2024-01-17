function solution(phone_book) {
    let answer = phone_book.sort().some((b,i) => {
        // console.log(b,i)
        return phone_book[i+1]?.indexOf(b) === 0  // 앞에서 부터인지
    })
    return !answer;
}
