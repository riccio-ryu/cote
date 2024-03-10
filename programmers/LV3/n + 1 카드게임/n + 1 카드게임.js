/*
n = 6배수
n = 12, coin = 4이고 [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]
1 -> 4 ===> [3, 6, 7, 2], coin 4

** [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4], 13
1r -> [3, 6, 7, 2] + 1, 10 (-2) ==> [3, 6, 7, 2, 1, 10] - 3, 10 ==> [1, 2, 6, 7]    ...(4-2)
2r -> [1, 2, 6, 7] d 5, 9  (0) ==> [1, 2, 6, 7] - 6, 7   ==> [1, 2]    ...(2)
3r -> [1,2] d 8 + 12        (-1) ==> [1,2,12] - 1, 12   ==> [2]         ...(2-1)
4r -> [2] + 11, d 4         (-1) ==> [2,11] - 2, 11     ==> []          ...(1-1)
5r x

1   :   4   /   [3, 6, 7, 2]   /   []  /   [1, 10, 5, 9, 8, 12, 11, 4]
2   :   4   /   [3, 2](6, 7)    /   [1, 10] /   [5, 9, 8, 12, 11, 4]
3   :   3   /   [2](3, 10)  /   [1, 5, 9]   /   [8, 12, 11, 4]
4   :   1   /   [2](1, 12)  /   [5, 8, 9]   /   [11, 4]
5   :   0   /   [](2, 11)   /   [4, 5, 8, 9]    /   []
**

** [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11, 12], coin = 3, 13
1r -> [1, 2, 3, 4] +5,8 (-2)    ==> [1, 2, 3, 4, 5, 8] -5, 8    ==> [1, 2, 3, 4]    ...(3-2)
2r -> [1, 2, 3, 4] d 6, d 7 ... x

** [5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7] coin = 2, 13
1r -> [5, 8, 1, 2] d9, d4       ==> [5, 8, 1, 2] -5, 8      ==> [1, 2]      ...(2)
2r -> [1, 2] + 12, 11       ==> [1, 2, 11, 12] - 1, 12      => [2, 11]      ..(2-2)
3r -> [2, 11] d3, d10       ==> [2, 11] - 2, 11     ==> []
4r -> [] d6, d7     => x

** [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] coin = 10, 19
1r -> [1, 2, 3, 4, 5, 6] d 7, d 8   ==> [1, 2, 3, 4, 5, 6]  ==> [1, 2, 3, 4, 5, 6] (10) ...x

1. 손에 보유 중인 카드들 중 2개로 만들수 있는 경우
2. 손에 보유 중인 카드들 중 1개 + 저장된 카드들 중 1개로 만들수 있는 경우
3. 저장된 카드들 중 2개로 만들수 있는 경우
*/
function solution(coin, cards) {
    let answer = 0;
    const leng = cards.length
    const sum = leng+1
    let arr = cards.splice(0, leng/3)   // 가지고 있는 배열
    let save = []                       // 임시 저장 숫자 배열
    // console.log(leng, sum, arr, cards)
    while(cards.length){
        const [c1, c2] = cards.splice(0,2)
        save.push(c1)
        save.push(c2)
        // console.log(save)
        // 1. 보유중인 카드에서 2개
        const arrHave = getArr(arr, sum);
        if (arrHave) {
          arr = arr.filter((e) => !arrHave.includes(e)); // hand에서 사용한 카드 삭제
          answer++; // 라운드 증가
          continue;
        }
        // 2. 보유 1 + save 배열 1
        const arrSaveHave = getArrSave(arr, save, sum);
        if (arrSaveHave && coin) {
          const [handNum, keepNum] = arrSaveHave;
          arr = arr.filter((e) => e !== handNum); // arr에서 사용한 카드 삭제
          save = save.filter((e) => e !== keepNum); // save에서 사용한 카드 삭제
          coin--; // keep에서 하나 구매한 동전 감소
          answer++;
          continue;
        }
        // 3. save 배열에서 2개
        const saveHave = getArr(save, sum);
        if (saveHave && coin >= 2) {    // 동전이 2개 이상이면
          save = save.filter((e) => !saveHave.includes(e)); // hand에서 사용한 카드 삭제
          coin -= 2; // 사용한 2개 동전 감소
          answer++; // 라운드 증가
          continue;
        }
        // 위의 3가지 방법으로 sum을 만들 수 없으면 게임종료
        break;
    }
    return answer + 1;  // 마지막 라운드 통과 1을 추가해 주어야 한다
}

function getArr(arr, goal) {       // arr에서 2개를 더했을때 목표치에 도달한 경우(1, 3)
  for (let i = 0; i < arr.length - 1; i++) {
    const first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const second = arr[j];
      if (first + second === goal) {
        return [first, second];
      }
    }
  }
  return null;
}

function getArrSave(arr, save, goal) {  //arr 1개, save 1개
  for (let i = 0; i < arr.length; i++) {    // arr
    const first = arr[i];
    for (let j = 0; j < save.length; j++) { // save
      const second = save[j];
      if (first + second === goal) {
        return [first, second];
      }
    }
  }
  return null;
}
