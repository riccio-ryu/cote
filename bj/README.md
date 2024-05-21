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
