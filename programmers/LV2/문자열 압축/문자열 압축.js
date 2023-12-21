//2023

function solution(s) {
    const l = s.length
    let answer = l;
    for(let i = 1; i<= Math.floor(l / 2); i++){//i는 자를 수(절반보다 많은 수를 자를수 없음) 
        let temp = "";  // 문자열 임시저장
        let cnt = 1;    // 같은 문자열 개수
        for (let j = 0; j < l; j += i) {        // j는 i만큼 늘어난다
            let ss = s.slice(j, j + i);         // 비교대상 문자열
            // console.log('i', i, 'j', j, 'ss', ss)
            while(true){                        // 같은 문자열을 찾는다
                j+=i    // 현재 다음
                let ss2 = s.slice(j, j + i);
                console.log(ss, ss2)
                if(ss === ss2) cnt++
                else break;
            }
            temp += cnt >= 2 ? cnt + ss : ss;
            j-=i        // 현재 다음 초기화
            cnt = 1     //cnt초기화
        }
        // console.log('temp : ', temp)
        answer = Math.min(temp.length, answer);
        // console.log(answer)
    }
    return answer;
}



//2022
function solution(s) {
    let answer = 0;
    const leng = s.length;
    let arr = [];
    for(let i = 1; i <= leng; i++){//i는 길이
        let cnt = 1;
        let arr2 =[]
        for(let r = 0; r <= parseInt(leng/i); r++){
            const gam = s.slice(i*r, i*r + i);
            console.log(gam)
            if(arr2[arr2.length-1] === gam){
                cnt++
            }else{
                if(cnt > 1) arr2[arr2.length-1] = cnt+arr2[arr2.length-1]
                arr2.push(gam)
                cnt = 1
            }
        }
        arr.push(arr2.join('').length)
    }
    return Math.min(...arr);
}

/*
function solution(s) {
    var answer = 0;
    let lengthArr = []
    for (let i = 1; i <= s.length; i++) lengthArr.push(compressedString(s, i).length)
    answer = Math.min(...lengthArr)
    return answer;
}

function compressedString(str, unitNum) {
    let count = 1
    let result = ['']
    for (let repeat = 0; repeat <= str.length / unitNum; repeat++) {
        const slicedGroup = str.slice(unitNum * repeat, unitNum * repeat + unitNum)
        if (result[result.length - 1] === slicedGroup) {
            count++
        } else {
            if (count > 1) result[result.length - 1] = count + result[result.length - 1]
            result.push(slicedGroup)
            count = 1
        }
    }
    return result.join('')
}
*/
