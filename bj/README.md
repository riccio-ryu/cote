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
const arr = input[i];
const k = arr.shift();

function comb(arr, num) {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);
  arr.forEach((f, i, o) => {
    const rest = o.slice(i + 1);
    const cb = comb(rest, num - 1);
    const att = cb.map((el) => [f, ...el]);
    result.push(...att);
  });
  return result;
}

const val = comb(arr, 6);
// arr 을 이용해 6개로 만들수 있는 중복없는 모든 배열
```
