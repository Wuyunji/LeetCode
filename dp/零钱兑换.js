/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for(let i = 1; i <= amount; i++){
    for(let j = 0; j < coins.length; j++){
      if(i - coins[j] >= 0){
        dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1)
      }
    }
  }
  console.log(dp);
  return dp[amount] > amount ? -1 : dp[amount]
};
let s = coinChange([1,2,5], 11)
console.log(s);
