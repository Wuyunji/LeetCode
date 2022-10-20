/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  let sum = 0;
  function backtrack(index) {
    if (index === nums.length) {
      if (sum === target) {
        count++;
        return;
      }
    } else {
      sum += nums[index];
      backtrack(index + 1);
      sum -= nums[index];

      sum -= nums[index];
      backtrack(index + 1);
      sum += nums[index];
    }
  }
  backtrack(0);
  return count;
};

let s = findTargetSumWays([1, 1, 1, 1, 1], 3);
console.log(s);
