//2023
function solution(w, h) {
    const gcd = (w, h) => w % h === 0 ? h : gcd(h, w % h);
    return (w*h-(w+h-gcd(w,h)));
}

//2022
function solution(w, h) {
    let answer = 1;
    let cen = gbg(w,h)
    console.log(w,h,cen)
    answer = w*h - (w+h-cen)
    return answer;
}

function gbg(a,b){
    return a%b===0 ? b : gbg(b, a%b)
}


//https://noogoonaa.tistory.com/74

/*
차근차근 생각해보자    높이 h  너비 w
3*1의 사각형은 3개의 사각형을 지나고(3)(3)
3*2의 사각형은 4개의 사각형을 지나고(6)(4)
3*3의 사각형은 3개의 사각형을 지나고(9)(3)
w + h - 최대공약수 // 3+1-1  //3+2-1 //3+3-3
이러한 규칙을 따른다.
*/
