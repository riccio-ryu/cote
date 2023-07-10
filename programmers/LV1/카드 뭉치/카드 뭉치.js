function solution(cards1, cards2, goal) {
    for(const g of goal){
        // console.log(g)
        if(cards1[0] === g){
            cards1.shift()
        }else if(cards2[0] === g){
            cards2.shift()
        }else{
            return "No";
        }
    }
    return "Yes";
}


/*  실패 3개 ::: 원인은 answer 이 빈 문자열이라 ''로 노출 되는 것 같다.
function solution(cards1, cards2, goal) {
    let answer = '';
    for(const g of goal){
        // console.log(g)
        if(cards1[0] === g){
            cards1.shift()
        }else if(cards2[0] === g){
            cards2.shift()
        }else{
            answer = "No"
            break;
        }
        
        if(cards1.length === 0 && cards2.length === 0 ){
            answer = "Yes"
        }
    }
    return answer;
}
*/
