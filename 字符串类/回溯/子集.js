/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let arr = []
  let temp = []
  function backtrack(startIndex){
    arr.push(temp.slice())
    for(let i = startIndex; i < nums.length; i++){
      temp.push(nums[i])
      backtrack(i + 1)
      temp.pop()
    }
  }
  backtrack(0)
  return arr
};
let s = subsets([1,2,3,4,5])
console.log(s);
