/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sum = 0
  let min = Infinity
  let minIndex = 0
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i]
    if (sum < min) {
      min = sum
      minIndex = i
    }
  }
  return sum < 0 ? -1 : (minIndex + 1) % gas.length
};
let s = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])
console.log(s);
