// 把数字翻译成字符串
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let str = num.toString()
  let n = str.length;
  let dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i < n + 1; i++) {
    let temp = Number(str[i - 2] + str[i - 1])
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[n]
};

let s = translateNum(12258)
console.log(s);
