### 자바스크립트의 2차원 빈 배열
---

```javascript
const arr1 = [[1,2],[3,4],[5,6]]  //example

let arr = new Array(arr1.length);

for (var i = 0; i < arr1.length; i++) {
    arr[i] = new Array(arr1[i].length);
}
```
