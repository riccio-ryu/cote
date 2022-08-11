### 대문자 소문자
---

toUpperCase

toLowerCase



### slice()
---

메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

slice(start[, end])

arr.slice(3, 5) 는 index번호 3부터 4까지 추출

arr.slice(-3, 9)  뒤에서부터 3번째 부터 추출하기 시작해서 앞에서부터 9번째까지 추출

arr.slice(5, -4)  index번호 5번부터 추출 시작하여 끝에서부터 -4번째 전까지 추출




### splice() 
---

메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

start : 배열의 변경을 시작한 인덱스이다. 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정된다. (음수로 설정될 경우 배열의 끝에서부터 요소를 세어나가 array.length  n 번째 인덱스를 가르키며, 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정된다.)

deleteCount : 배열에서 제거할 요소의 수이다.(deleteCount를 생략하거나 값이 array.length - start 보다 크면 start부터의 모든 요소를 제거하며, 0 이하라면 어떤 요소도 제거하지 않으나 이 때는 최소한 하나의 새로운 요소를 지정해야한다.)

item : 배열에 추가할 요소이다. (보통 배열 요소를 삭제할때는 생략해서 사용한다.)

```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```




### repeat()
---

말그대로 반복한다.
'abc'.repeat( 2 )
abcabc 출력


### 정규표현식
---

"특정 패턴의 문자열"을 찾기 위한 표현 방식

정규 표현식 리터럴(바뀔 일이 없는 패턴의 경우)  :   const re = /ab+c/

RegExp 객체의 생성자 호출(바뀔 수 있는 패턴이나, 사용자 입력 등 외부 출처에서 가져오는 패턴의 경우)  :    const re = new RegExp('ab+c')


/Patter/Flag

- Flag는 검색 옵션(i:대소문자구별없이, g:문자열내 모든 패턴검사, m:면자열의 행이 바뀌어도 검색, s:개행문자 \n도 포함, u: 유니코드전체지원, y: 문자내 특정위치에서)
- Pattern
  - /a/ : a 하나만 찾는다

+ 매칭 패턴
  + . 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두! 단, 줄바꿈X)
  + a-zA-Z     : 영어 알파벳
  + ㄱ-ㅎ가-힣  : 한글 문자
  + 0-9        : 숫자
  + \d         : 숫자    ===[0-9]
  + \D         : 숫자가 아닌 것  ===[^0-9]
  + \w         : 영어 알파벳, 숫자, 언더스코어(_)    ===[A-Za-z0-9_]
  + \W         : /w 가 아닌 것
  + \s         : space 공백
  + \S         : space 공백이 아닌 것
  + \특수기호   : 특수기호(\* \^ \& \! \? ...등)
  + \b         : 63개 문자(영문 대소문자 52개 + 숫자 10개 + _(underscore))가 아닌 나머지 문자에 일치하는 경계(boundary)   \bgngsn\b -> (aagngsnaa - x / gngsn -o / http://gngsn.tistory.com/ - o)
  + \B         : 63개 문자에 일치하는 경계   \Bgngsn\B -> (aagngsnaa - o / gngsn -x / http://gngsn.tistory.com/ - x)
  + \x         : 16진수 문자에 일치, /\x61/는 a에 일치
  + \0         : 8진수 문자에 일치, /\141/은 a에 일치
  + \u         : 유니코드(Unicode) 문자에 일치, /\u0061/는 a에 일치
  + \c         : 제어(Control) 문자에 일치
  + \f         : 폼 피드(FF, U+000C) 문자에 일치
  + \n         : 줄 바꿈(LF, U+000A) 문자에 일치
  + \r         : 캐리지 리턴(CR, U+000D) 문자에 일치
  + \t         : 탭 (U+0009) 문자에 일치

+ 검색패턴
  + |          : OR  a|b
  + []         : 괄호안의 문자들 중 하나. or처리라 보면 된다./abc/ "abc"를 포함하는/[abc]/ "a" 또는 "b" 또는 "c" 를 포함하는[다-바] 다 or 라 or 마 or 바
  + [^문자]    : 괄호안의 문자를 제외한 것[^lgEn] "l" "g" "E" "N" 4개 문자를 제외
  + ^문자열     : 특정 문자열로 시작(괄호 없음 주의!)/^www/
  + 문자열$     : 특정 문자열로 끝남/com$/

+ 갯수(수량) 반복 패턴
  + ?          : 없거나 or 최대 한개만/apple?/
  +*          : 없거나 or 있거나 (여러개)/Wo*/
  ++          : 최소 한개 or 여러개/Wo+/
  + *?         : 없거나,있거나 && 없거나,최대한개 = 없음{0}와 동일
  + +?         : 최소한개,있거나 && 없거나,최대한개 = 한개{1}와 동일
  + {n}        : n개
  + {Min,}     : 최소 Min개 이상
  + {Min, Max} : 최소 Min개 이상, 최대 Max개 이하{3,5}? == {3}와 동일

+ 그룹
  + ()         : 그룹화 & 캡쳐
  + (?: 패턴)  : 그룹화 캡쳐X
  + (?=)       : 앞쪽 일치(Lookahead), /ab(?=c)/
  + (?!)       : 부정 앞쪽 일치(Negative Lookahead), /ab(?!c)/
  + (?<=)      : 뒤쪽 일치(Lookbehind), /(?<=ab)c/ 
  + (?<!)      : 부정 뒤쪽 일치(Negative Lookbehind), /(?<!ab)c/


+  알아두면 유용함
  +^$      : 빈문자열

