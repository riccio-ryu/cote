# 백준 제출 작성법

```
// 'example.txt' 부분을 '/dev/stdin'로 변경하기
//한줄씩
const input = require("fs").readFileSync("example.txt").toString().split("\n");

//한칸 뛰고
const input = require("fs").readFileSync("example.txt").toString().split(" ")

// 개행분자 제거
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r|\s*/g, ""));

// 줄바꿈 제거
str.replace(/\n/g, "");

// 엔터 제거
str.replace(/\r/g, "");

// 공백 제거
str.replace(/\s*/g, "");

// 개행문자 모두 제거
str.replace(/\n|\r|\s*/g, "");
```

//terminal 실행
해당 폴더 진입 후 'node index' enter


반복문(브루트 포스) 1~N까지의 숫자로 중복없이 만든 모든 배열
```
const ff = (n) => {
  const result = [];

  const fff = (m, l = []) => {
    if (!m.length) {
      result.push(l);
    } else {
      for (let i = 0; i < m.length; i++) {
        const copy = [...m];
        const k = copy.splice(i, 1);
        fff(copy, l.concat(k));
      }
    }
  };
  fff(n);
  return result;
};

const arrays = ff(
  Array(N)
    .fill()
    .map((_, i) => i)
);

console.log(arrays);
```

반복문을 이용한 배열 줄세우기(브루트 포스)
```
function getCombination(arr,selectNum){
    const result = [];                                               // 결과값을 담은 배열선언 
    if(selectNum === 1) {                                            // selectNum 이 1 일 때 (재귀함수의 종료조건, 탈출구!)
        return arr.map(a=>[a])                                       // ex) [[2], [3]] 이런식으로 값이 리턴된다 
    }
    arr.forEach((fix,i,origin)=>{
        const rest=origin.slice(i+1);                                // 처음 하나(fixedNum)를 제외한 나머지를 배열로 만들기 ex) 1을 제외하면 [2, 3, 4]
        const combi=getCombination(rest,selectNum-1);                // selectNum === 1 이 되서 배열을 리턴하며 종료할 때까지 재귀된다
        const attach=combi.map((c)=>[fix,...c]);                     // 앞에서 따로 뺴놓은 첫번째 수(fixedNum)를 각각 배열 값에 추가해주자
        result.push(...attach)                                       // reuslt 배열에 push 해준다    // (spread를 사용하는 이유는 반환된 배열들을 한 배열 안으로 넣기 위해서이다)
    }) 
    return result;
}

getCombination([1,2,3,4], 3);
```
