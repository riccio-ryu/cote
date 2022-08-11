### 문자열 길이 맞추기
-------

padStart, padEnd
```javascript
'03'.padStart(6,'0'); // '000003'
'2500'.padStart(8,'$'); // "$$$$2500"
'12345'.padStart(10); // "     12345"
'abc'.padEnd(9,'123'); // "abc123123"
'주석문'.padStart(6,'*').padEnd(9,'*'); // "***주석문***"
```


진수 바꾸는거 까먹었었음
쉽게생각하자 
```javascript
let ten = 10
ten.toString(2) //1010  //10 -> 2
parseInt(ten, 2)  //2 //2 -> 10
```
