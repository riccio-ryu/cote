// 대략 1시간 
/*
ABABABABABABABAB
A AB(27)
B BA(28)
AB ABA(29)
ABA ABAB(30)
BA BAB(31)
A B AB ABA BA BAB ABAB
1 2 27 29  28 31  30
*/
function solution(msg) {
    let answer = [];
    let arp = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let str = ''
    for(let i = 0; i < msg.length; i++){
        // console.log(msg[i])
        str += msg[i]
        if(!arp.includes(str)){
            // console.log(i, str)
            answer.push(arp.indexOf(str.slice(0,-1)))
            arp.push(str)
            str = msg[i]
        }
    }
    // console.log(str, arp)
    if (str) answer.push(arp.indexOf(str));
    // let n = 0   // 위치? 
    // let m = 1   // last (초기화할시에 n+1)
    // while(n < msg.length){
    //     // console.log('start n : ', n)
    //     str = msg.slice(n, m)
    //     if(arp.includes(str)) m++
    //     else {
    //         // console.log('str ',str, msg.slice(n, m-1), n,m)
    //         answer.push(arp.indexOf(msg.slice(n, m-1)))
    //         arp.push(str)
    //         n = m-1
    //     }
    //     // console.log(msg.slice(n, m), arp.indexOf(msg.slice(n,m)), msg.slice(n,++m),arp.indexOf(msg.slice(n,++m)))
    // }
    // console.log(n,m, str, arp)
    return answer;
}
