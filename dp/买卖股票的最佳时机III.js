/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy1 = -prices[0]
  let sell1 = 0
  let buy2 = -prices[0]
  let sell2 = 0
  for (let i = 0; i < prices.length; i++) {
    buy1 = Math.max(buy1, -prices[i])
    sell1 = Math.max(sell1, buy1 + prices[i])
    buy2 = Math.max(buy2, sell1 - prices[i])
    sell2 = Math.max(sell2, buy2 + prices[i])
  }
  // console.log(buy1, buy2, sell1, sell2);
  return sell2
};
let s = maxProfit([3, 3, 5, 0, 0, 3, 1, 4])
console.log(s);
