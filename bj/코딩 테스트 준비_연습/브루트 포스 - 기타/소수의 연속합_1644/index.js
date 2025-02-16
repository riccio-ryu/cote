//2025


const N = parseInt(
  require("fs").readFileSync("example.txt").toString().trim(),
  10
);

//소수
function getPrimes(limit) {
  const isPrime = Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.map((v, i) => (v ? i : 0)).filter((v) => v);
}

const primes = getPrimes(N);
let start = 0,
  end = 0,
  sum = 0,
  count = 0;

while (start < primes.length) {
  if (sum >= N) {
    if (sum === N) count++;
    sum -= primes[start++];
  } else if (end < primes.length) {
    sum += primes[end++];
  } else {
    break;
  }
}

console.log(count);
