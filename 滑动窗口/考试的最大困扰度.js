// 考试的最大困扰度
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  function slidingWindow(ch) {
    let n = answerKey.length
    let left = 0
    let right = 0
    let sum = 0
    let ans = 0
    while (right < n) {
      if (answerKey[right] === ch) {
        sum++
      }
      while (sum > k) {
        if (answerKey[left] === ch) {
          sum--
        }
        left++
      }
      ans = Math.max(right - left + 1, ans)
      right++
    }
    return ans
  }
  return Math.max(slidingWindow('T'), slidingWindow('F'))
};

let s = maxConsecutiveAnswers("TTFTTFTT", 1)
console.log(s);
