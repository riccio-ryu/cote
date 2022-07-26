function solution(s) {
    //s 를 숫자로만 치환하라
    const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < number.length; i++){
         s = s.replace(number[i], i)
    }
    return parseInt(s);
}

// 결과 : 5,7,8 fail... 

/*모범답안
for (let i = 0; i < 10; i++) {
    s = s.split(number[i]).join(i);
}

혹은 

for (let i = 0; i < 10; i++) {
  const regex = new RegExp(number[i], "g");
  s = s.replace(regex, i);
}
*/
