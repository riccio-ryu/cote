# 백준 제출 작성법

```
// 'example.txt' 부분을 '/dev/stdin'로 변경하기
//한줄씩
const input = require("fs").readFileSync("example.txt").toString().split("\n");

//한칸 뛰고
const input = require("fs").readFileSync("example.txt").toString().split(" ")
```
