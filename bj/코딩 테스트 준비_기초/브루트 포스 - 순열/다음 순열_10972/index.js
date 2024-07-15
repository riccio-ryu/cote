// 2024
let [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r|\s*/g, ""));
const n = Number(N);
let m = M.split("").map(Number);

const ff = (arr) => {
  let i = arr.length - 1; //마지막 수
  // arr의 끝에서부터 첫 번째 감소하는 숫자를 찾자
  while (i > 0 && arr[i - 1] >= arr[i]) i--;
  if (i <= 0) return false; // 첫 번째 감소가 없으면 -1

  let j = arr.length - 1; // arr[i-1]보다 큰 첫번째 수
  while (arr[j] <= arr[i - 1]) j--;

  // i-1과 j를 교환
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  // console.log(arr);

  // arr[i]부터 끝까지 배열을 뒤집는다
  j = arr.length - 1;
  // console.log("1", i, j, arr);
  while (i < j) {
    // console.log("2", i, j, arr);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return true;
};

if (ff(m)) {
  console.log(m.join(" "));
} else {
  console.log(-1);
}



// 메모리 초과
let [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r|\s*/g, ""));
const m = M.split("").map(Number);
const n = Number(N);
const l = m.join("");

const p = (arr) => {
  const result = [];
  const pp = (a, b) => {
    if (!b.length) {
      result.push(a.join(""));
    } else {
      for (let i = 0; i < b.length; i++) {
        let c = a.concat(b[i]);
        let d = b.slice(0, i).concat(b.slice(i + 1));
        pp(c, d);
      }
    }
  };
  pp([], arr);
  return result;
};
const arr = p(m).sort();
const ind = arr.findIndex((o) => o === l);
console.log(
  ind < 0 || ind + 1 >= arr.length ? -1 : arr[ind + 1].split("").join(" ")
);



// 2023
// N(1 ≤ N ≤ 10,000)

const [cnt, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/).map(v => +v);


const sv = (cnt, arr) => {
    let answer = '';
    const arrSort = [...arr].sort((a,b) => b-a)
    if(arr.every((v,i) => v === arrSort[i])){
        answer = '-1'
    }else{
        let i = cnt - 2;    // 말둘
        while (arr[i] > arr[i+1]) {
            i--;
        }
        let j = cnt - 1;    // 말
        while (arr[i] > arr[j]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        answer = [
            ...arr.slice(0, i + 1),
            ...arr.slice(i + 1, cnt).sort((a,b) => a - b)
        ].join(' ')
    }
    console.log(answer);
}

sv(cnt, arr)

/*
let part = arr[cnt-1]
let b = 0

for (let i = cnt; i > 0; i--) {
    if(part <= arr[i - 1]){
        b = i
        break;
    }
    part = arr[i - 1]
}

let ar1 = arr.splice(0, b-1)
let ar2 = [...arr]

for (let i = ar2.length - 1; i >= 0; i--) {
    if(ar1[ar1.length -1] < ar2[i]){
        let w = ar1[ar1.length -1]
        ar1.splice(ar1.length -1, 1, ar2[i])
        ar2.splice(i, 1, w)
        console.log(ar1.join(' ') + ' ' + ar2.join(' '));
    }
    if(i === 0){
        console.log(-1);
    }
}
*/
// 참조 : https://kwanghyuk.tistory.com/25
