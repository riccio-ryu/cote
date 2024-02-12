// 2024

// 힌트 영상 : https://www.youtube.com/watch?embeds_referring_euri=https%3A%2F%2Fjiwoo84.tistory.com%2F115&source_ve_path=Mjg2NjQsMTY0NTAz&feature=emb_share&v=aPYE0anPZqI

function solution(n) {
    let answer = [];
    
    const h = (n, start, mid, end) => {
        if(n === 1) answer.push([start, end])
        else{
            // console.log(n, start, mid, end)
            h(n-1, start, end, mid)
            answer.push([start, end])
            h(n-1, mid, start, end)
        }
    }
    
    h(n,1,2,3)
    return answer;
}
