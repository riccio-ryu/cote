### charAt() 
---

문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.

```javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"
```


### charCodeAt() 
---

메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환합니다.

```javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```


+ 48~~~57 : 0~~~9
+ 65~90 : A~Z
+ 97~122 : a~z


<https://velog.io/@ahsy92/JavaScript-charCodeAt-%EC%95%84%EC%8A%A4%ED%82%A4-%EB%84%98%EB%B2%84-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0>
