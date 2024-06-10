// 2024
const [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((s) => parseInt(s.replace(/\n|\r|\s*/g, "")));

// console.log(N, M);

const arr = Array(M).fill("");
const visited = Array(N + 1).fill(false);
let b = "";

// console.log(arr, visited);

function dfs(lev) {
  // console.log("lev ", lev);
  if (lev === M) {
    // lev이 M과 같을때 return한다.
    let data = [];
    for (let i = 0; i < M; i++) {
      // console.log("arr i ", arr[i]);
      data.push(arr[i]);
    }
    return (b += `${data.join(" ")}\n`);
  }
  for (let i = 1; i <= N; i++) {
    //     console.log("i = " + i);
    if (visited[i]) {
      continue;
    }
    arr[lev] = i; // 현재값을 현재 깊이에 추가해준다.
    // visited[i] = true;
    dfs(lev + 1); // M의 깊이만큼 계속 lev을 증가시켜준다.
    // visited[i] = false; // lev이 M과 같아질때 return이 되면 여기로 넘어와 방금 방문한곳을 false처리 한다.
  }
}
dfs(0);

console.log(b);



//시간초과 아마 답변에서 나는걸로 예상
const [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((s) => parseInt(s.replace(/\n|\r|\s*/g, "")));

// console.log(N, M);

const arr = Array(M).fill("");
const visited = Array(N + 1).fill(false);
const b = [];

// console.log(arr, visited);

function dfs(lev) {
  // console.log("lev ", lev);
  if (lev === M) {
    // lev이 M과 같을때 return한다.
    let data = [];
    for (let i = 0; i < M; i++) {
      // console.log("arr i ", arr[i]);
      data.push(arr[i]);
    }
    return b.push(data.join(" "));
  }
  for (let i = 1; i <= N; i++) {
    //     console.log("i = " + i);
    if (visited[i]) {
      continue;
    }
    arr[lev] = i; // 현재값을 현재 깊이에 추가해준다.
    // visited[i] = true;
    dfs(lev + 1); // M의 깊이만큼 계속 lev을 증가시켜준다.
    // visited[i] = false; // lev이 M과 같아질때 return이 되면 여기로 넘어와 방금 방문한곳을 false처리 한다.
  }
}
dfs(0);
for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}



// 2023
const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);
// input -> n, m
//(1 ≤ M ≤ N ≤ 8)

const N = input[0];
const M = input[1];

let ss = (N,M) => {
    let arr = Array(M).fill(0);     // 자릿수 1 2 3 4 or 1 2
    let nums = Array(N).fill(0);    // 숫자의 사용여부? 0 -> 사용안함(사용가능), 1 -> 사용 중
    let ret = ''

    let func = (num) => {
        // console.log('num  ', num);
        if(num === M){
            let data = []
            for (let i = 0; i < M; i++) {
                data.push(arr[i]);
                // console.log(data);
            }
            // console.log(data);
            return ret += `${data.join(' ')}\n`
        }
        for (let i = 0; i < N; i++) {
            if(!nums[i]){   // nums i번째가 0(false)라면 사용 가능이다...
                arr[num] = i+1
                // nums[i] = 1
                func(num + 1)
                // nums[i] = 0
            }
        }
    }

    func(0)
    return ret
}
console.log(ss(N,M));
