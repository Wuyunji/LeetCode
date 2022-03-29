/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  const MOD = 1000000007;
  let dp = new Array(5).fill(1)
  let countArr = new Array(5).fill(0)
  for (let i = 1; i < n; i++) {
    countArr[0] = (dp[1] + dp[2] + dp[4]) % MOD
    countArr[1] = (dp[0] + dp[2]) % MOD
    countArr[2] = (dp[1] + dp[3]) % MOD
    countArr[3] = dp[2] % MOD
    countArr[4] = (dp[2] + dp[3]) % MOD
    dp = countArr.slice()
  }
  return countArr.reduce((sum, n) => (sum + n) % MOD)
};
let s = countVowelPermutation(2)
console.log(s);
