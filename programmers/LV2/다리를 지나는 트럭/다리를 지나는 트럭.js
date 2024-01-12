/*
참고: https://school.programmers.co.kr/questions/38939
다리(bridge_length) 길이 bridge_length = 2 라면, 트럭이 지나는데 2초가 걸림 = 2칸이라 생각하자.
*/
function solution(bridge_length, weight, truck_weights) {
    let answer = 0; // timer
    let b = Array.from({length: bridge_length}, () => 0);    // 다리 위
    let bsum = 0  // 다리 위 합
    
    // 첫 트럭 다리위에 올리고 시작
    answer++        // 트럭하나 움직이고 1초추가
    const first = truck_weights.shift()
    b.shift()
    b.push(first)
    bsum += first
    // console.log(b, bsum)
    
    while(bsum > 0){
        answer++    // 1초추가
        bsum -= b.shift()   // b의 맨앞 제거 (맨뒤 빔)
        // b.push()
        if(truck_weights.length > 0 && bsum + truck_weights[0] <= weight){
            const truck = truck_weights.shift()
            // console.log('truck : ', truck)
            bsum += truck
            b.push(truck)
        }else{  // 다리위에 올라오면 안됨
            b.push(0)
        }
        // console.log('b : ', b)
    }
    return answer;
}
