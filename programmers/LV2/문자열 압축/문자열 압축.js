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
