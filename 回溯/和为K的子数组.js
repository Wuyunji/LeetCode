// 和为K的子数组
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0
  let temp = []
  function sum(arr){
    return arr.reduce((sum, num)=>sum+num,0)
  }
  function backtrace(startIndex){
    console.log(temp);
    if(sum(temp)===k){
      count++
    }
    for(let i = startIndex; i < nums.length;i++){
      temp.push(nums[i])
      backtrace(i+1)
      temp.shift()
    }
  }
  backtrace(0)
  return count
};

let s = subarraySum([1,2,3,4,5], 3)
console.log(s);
