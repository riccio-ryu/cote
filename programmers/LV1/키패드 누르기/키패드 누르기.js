//2023
/*
1   2   3
4   5   6
7   8   9
10  11  12
*/
// l :: 4 % 3 =>1 // c 5 % 3 => 2 // 6 % 3 => 0

let now_left = 10;      // 현재 왼쪽 검지
let now_right = 12;     // 현재 오른쪽 검지

function solution(numbers, hand) {
    return numbers.map(n => {
        if(n === 0) n = 11
        switch(n % 3){
            case 0:
                return rightMove(n)
                break;
            case 1:
                return leftMove(n)
                break;
            default:
                return centerMove(n, hand)
                break;
        }
    }).join('');
}

const leftMove = (x) => {
    now_left = x;
    return 'L'
}
const rightMove = (x) => {
    now_right = x;
    return 'R'
}
const centerMove = (x, h) => {
    // 목표 지점 ~ 좌 검지 거리
    // 목표 지점 ~ 우 검지 거리
    // 두 검지 거리가 같다면 h, h에 따른 현재 좌 검지, 우 검지 이동, 리턴.
    const l = dist(now_left, x)
    const r = dist(now_right, x)
    if(l < r){
        return leftMove(x)
    }else if(l > r){
        return rightMove(x)
    }else{
        return h === 'left' ? leftMove(x) : rightMove(x)
    }
}
const dist = (a, b) => {
    a=a-1;
    b=b-1;
    // a :: now_left or now_right       // b는 목표 지점 : 2,5,8,11(0)
    /*
    b -> 2   a -> 10  
    가로 차 :: 10 % 3 = 1, 2 % 3 = 2, 즉 2 - 1 = 1
    세로 차 :: 첫 줄 과 마지막 줄 , 10 / 3 -> 3, 3은 4번줄, 2/3 = 0, 0은 1번줄 :: 4 - 1 = 3
    결론 4칸 차
    */
    // a, b를 생으로 쓰면, b/3 - a/3등에 문제가 생김 :: 8/3 - 1/3 는 2    // 1씩 이동 후 7/3 - 0/3 = 2, 
    // 우측 parseInt(8/3) - parseInt(3/3) = 1, -1씩 parseInt(7/3) - parseInt(2/3) = 2
    // 8%3 - 1%3 = 1, -1씩 :: 7%3 - 0%3 = 1 // 우측은 8%3 - 3%3 = 2, -1씩, 7%3 - 2%3 = -1 = 1
    const v = Math.abs((b%3) - (a%3))
    const h = Math.abs(parseInt(b/3) - parseInt(a/3))
    return v + h;
}

//2022
let now_l = 10; //leftThumb position
let now_r = 12; //rightThumb position

function leftMove(num){//leftThumb move, position change, L
    now_l = num;
    return "L"
}
function rightMove(num){//rightThumb move, position change, R
    now_r = num;
    return "R"
}
function distance (a, b){//a 현재위손가락위치, b 목표위치
    a === 0 ? 11: a
    let valA = parseInt((a-1)/3)
    let remA = (a-1)%3
    let valB = parseInt((b-1)/3)
    let remB = (b-1)%3
    return (Math.abs(valB-valA) + Math.abs(remB-remA))
}
function centerMove(num, hand){//2,5,8,0 //"left" or "right"
    let dis_l = distance(now_l, num)
    let dis_r = distance(now_r, num)
    if(dis_l === dis_r){
        return hand === "right" ? rightMove(num) : leftMove(num)
    }else if(dis_l > dis_r){
        return rightMove(num)
    }else{
        return leftMove(num)
    }
}
function solution(numbers, hand) {
    let answer = numbers
    const text = answer.map((num) => {
        if(num === 0){
            num= 11;
        }
        switch(num%3){
            case 0:
                return rightMove(num)
                break;
            case 1 :
                return leftMove(num)
                break;
            default:
                return centerMove(num, hand)
        }
    }).join("")
    return text;
}

/*
function solution(numbers, hand) {
  let leftNum = 10;
  let rightNum = 12;
  return numbers
    .map((num) => {
      if (num === 0) {
        num = 11;
      }
      if (num % 3 === 1) {
        return leftTo(num);
      } else if (num % 3 === 0) {
        return rightTo(num);
      } else {
        const numLocation = numToLocation(num);
        const leftDistance = distanceBtwLocation(
          numToLocation(leftNum),
          numLocation
        );
        const rightDistance = distanceBtwLocation(
          numToLocation(rightNum),
          numLocation
        );
        if (leftDistance === rightDistance) {
          return hand === "left" ? leftTo(num) : rightTo(num);
        } else if (leftDistance < rightDistance) {
          return leftTo(num);
        } else {
          return rightTo(num);
        }
      }
    })
    .join("");

  function leftTo(num) {
    leftNum = num;
    return "L";
  }

  function rightTo(num) {
    rightNum = num;
    return "R";
  }
}

function numToLocation(num) {
  return [Math.floor((num - 1) / 3), (num - 1) % 3];
}

function distanceBtwLocation(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

//정답 2 - chaerin-dev
function solution(numbers, hand) {
  // 키패드를 4행 3열의 이차원 배열이라고 생각

  // leftRow, leftCol: 왼손의 현재 위치
  let [leftRow, leftCol] = [3, 0];
  // rightRow, rightCol: 오른손의 현재 위치
  let [rightRow, rightCol] = [3, 2];
  // 각 번호를 누른 엄지손가락이 어느 손인지 저장할 문자열
  let result = "";

  // 눌러야할 각 번호가
  numbers.forEach((e) => {
    // 1/4/7이면 왼손으로 눌러야하므로
    if (e === 1 || e === 4 || e === 7) {
      // 왼손의 위치 업데이트
      [leftRow, leftCol] = [Math.floor((e - 1) / 3), 0];
      // result 문자열에 "L" 이어붙여줌
      result += "L";
    }

    // 3/6/9이면 오른손으로 눌러야하므로
    else if (e === 3 || e === 6 || e === 9) {
      // 오른손의 위치 업데이트
      [rightRow, rightCol] = [Math.floor((e - 1) / 3), 2];
      // result 문자열에 "R" 이어붙여줌
      result += "R";
    }

    // 2/5/8/0이면
    else {
      // 번호 위치 계산의 편의를 위해 눌러야 할 번호가 0일 경우 11로 바꿔줌
      if (e === 0) e = 11;

      // leftRow, leftCol: 다음에 눌러야 할 번호의 위치
      let [nextRow, nextCol] = [Math.floor((e - 1) / 3), 1];
      // leftDistance: 현재 왼손의 위치와 다음에 눌러야 할 번호의 위치 사이의 거리
      let leftDistance =
        Math.abs(leftRow - nextRow) + Math.abs(leftCol - nextCol);
      // rightDistance: 현재 오른손의 위치와 다음에 눌러야 할 번호의 위치 사이의 거리
      let rightDistance =
        Math.abs(rightRow - nextRow) + Math.abs(rightCol - nextCol);

      // 왼손이 다음에 눌러야 할 번호의 위치와 더 가깝거나, 두 손의 거리가 같으면서 왼손잡이라면 왼손으로 눌러야하므로
      if (
        leftDistance < rightDistance ||
        (leftDistance == rightDistance && hand === "left")
      ) {
        // 왼손의 위치 업데이트
        [leftRow, leftCol] = [nextRow, nextCol];
        // result 문자열에 "L" 이어붙여줌
        result += "L";
      }

      // 오른손이 다음에 눌러야 할 번호의 위치와 더 가깝거나, 두 손의 거리가 같으면서 오른손잡이라며 오른손으로 눌러야하므로
      else {
        // 오른손의 위치 업데이트
        [rightRow, rightCol] = [nextRow, nextCol];
        // reuslt 문자열에 "R" 이어붙여줌
        result += "R";
      }
    }
  });

  // result 문자열 반환
  return result;
}
*/
