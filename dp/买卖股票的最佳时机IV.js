/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let buy = new Array(k + 1).fill(-Infinity)
  let sell = new Array(k + 1).fill(-Infinity)
  buy[0] = -prices[0]
  sell[0] = 0

  for (let i = 1; i < prices.length; i++) {
    buy[0] = Math.max(buy[0], sell[0] - prices[i]);
    for (let j = 1; j < k + 1; j++) {
      buy[j] = Math.max(buy[j], sell[j] - prices[i])
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i])
    }
  }
  console.log(sell);
  return Math.max(...sell)
};
let s = maxProfit(3, [3, 3, 5, 0, 0, 3, 1, 4])
console.log(s);
