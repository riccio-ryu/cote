// 2024
const fs = require("fs");

// 입력을 읽어옵니다.
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const n = parseInt(input[0]);
let m = input[1].split(" ").map(Number);

function ff(arr) {
  let i = arr.length - 1;

  while (i > 0 && arr[i - 1] <= arr[i]) {
    i--;
  }

  if (i <= 0) {
    return false;
  }

  let j = arr.length - 1;

  while (arr[j] >= arr[i - 1]) {
    j--;
  }
  // console.log(1, arr, i, j);
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  // console.log(2, arr);
  // arr[i]부터 끝까지 배열을 뒤집습니다.
  j = arr.length - 1;
  while (i < j) {
    // console.log(3, arr);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    // console.log(4, arr);
    i++;
    j--;
  }

  return true;
}

if (ff(m)) {
  console.log(m.join(" "));
} else {
  console.log(-1);
}



// 2023

// N(1 ≤ N ≤ 10,000)

const [cnt, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/).map(v => +v);


const sv = (cnt, arr) => {
    let answer = '';
    const arrSort = [...arr].sort((a,b) => a-b)
    if(arr.every((v,i) => v === arrSort[i])){
        answer = '-1'
    }else{
        let i = cnt - 2;    // 말둘
        while (arr[i] < arr[i+1]) {
            i--;
        }
        let j = cnt - 1;    // 말
        while (arr[i] < arr[j]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        answer = [
            ...arr.slice(0, i + 1),
            ...arr.slice(i + 1, cnt).sort((a,b) => b - a)
        ].join(' ')
    }
    console.log(answer);
}

sv(cnt, arr)
