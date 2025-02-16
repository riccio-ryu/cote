// 2025

// 정답 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const words = input.slice(1).map((word) => word.slice(4, -4)); // 정확한 단어 변환
const essential = new Set(["a", "n", "t", "i", "c"]);

if (K < 5) {
  console.log(0);
  process.exit();
}
if (K === 26) {
  console.log(N);
  process.exit();
}

// 고유 문자 저장
const uniqueChars = new Set();
words.forEach((word) => {
  for (const char of word) {
    if (!essential.has(char)) uniqueChars.add(char);
  }
});

const charList = [...uniqueChars];
const canLearn = K - 5;

// 만약 배울 수 있는 글자보다 유니크 문자가 적다면, 모든 단어를 배울 수 있음
if (charList.length <= canLearn) {
  console.log(N);
  process.exit();
}

let maxCount = 0;

function countReadableWords(learnedSet) {
  let count = 0;
  words.forEach((word) => {
    if ([...word].every((char) => learnedSet.has(char))) {
      count++;
    }
  });
  return count;
}

function backtrack(index, selected) {
  if (selected.length === canLearn) {
    const learnedSet = new Set([...essential, ...selected]);
    maxCount = Math.max(maxCount, countReadableWords(learnedSet));
    return;
  }

  for (let i = index; i < charList.length; i++) {
    selected.push(charList[i]);
    backtrack(i + 1, selected);
    selected.pop();
  }
}

backtrack(0, []);
console.log(maxCount);


// 틀림
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const [N, K] = input[0].split(" ").map(Number);
const words = input.slice(1).map((word) => word.replace(/(anta|tica)/g, ""));
const essential = new Set(["a", "n", "t", "i", "c"]);
if (K < 5) {
  console.log(0); // 기본적인 글자도 못 배우면 읽을 단어 없음
  process.exit();
}
if (K === 26) {
  console.log(N); // 모든 알파벳을 배울 수 있음
  process.exit();
}

// console.log(N, K, words);

//antic -> 5    // K < 5 = 0
// K = 26 = N

let maxCount = 0;
const uniqueChars = new Set();

words.forEach((word) => {
  for (const char of word) {
    if (!essential.has(char)) uniqueChars.add(char);
  }
});

const charList = [...uniqueChars];
const canLearn = K - 5;

// console.log(charList, canLearn);

function countReadableWords(learnedSet) {
  let count = 0;
  words.forEach((word) => {
    let readable = true;
    for (const char of word) {
      if (!learnedSet.has(char)) {
        readable = false;
        break;
      }
    }
    if (readable) count++;
  });
  return count;
}

function backtrack(index, selected) {
  if (selected.length === canLearn) {
    const learnedSet = new Set([...essential, ...selected]);
    maxCount = Math.max(maxCount, countReadableWords(learnedSet));
    return;
  }

  for (let i = index; i < charList.length; i++) {
    selected.push(charList[i]);
    backtrack(i + 1, selected);
    selected.pop();
  }
}

if (canLearn > 0) backtrack(0, []);
console.log(maxCount);
