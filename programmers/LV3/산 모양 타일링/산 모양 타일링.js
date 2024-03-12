// https://codapul.blogspot.com/2024/01/2024-kakao-winter-internship_26.html
/*
이해가 안가는 구만... 개어렵다...
n = 0 -> 삼각형 1개 => 1
n = 1 -> 삼각형 3, 삼각형 1 + 마름모/1, 삼각형 1 + 마름모\1    => 3
n = 2 -> 삼각형 5, 삼각형 2 + 마름모/1 + 삼각형 1, 마름모/1 + 삼각형 3, 마름모/2 + 삼각형 1, 삼각형 1 + 마름모\1 + 삼각형 2, 삼각형 3 + 마름모\1, 마름모/1+삼각형1+마름모\1, 삼각형1+마름모\2 => 8
*/
function solution(n, tops) {
  const MOD = 10007;
  const dp = new Array(n + 1).fill().map(() => new Array(2).fill(0));

  dp[0][0] = 1;

  for (let i = 0; i < n; i += 1) {
    if (tops[i]) {
      dp[i + 1][0] = dp[i][0] * 3 + dp[i][1] * 2;
    } else {
      dp[i + 1][0] = dp[i][0] * 2 + dp[i][1] * 1;
    }

    dp[i + 1][1] = dp[i][0] + dp[i][1];

    dp[i + 1][0] %= MOD;
    dp[i + 1][1] %= MOD;
  }

  return (dp[n][0] + dp[n][1]) % MOD;
}
