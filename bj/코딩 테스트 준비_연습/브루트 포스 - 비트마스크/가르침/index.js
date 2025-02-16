// 2025

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
