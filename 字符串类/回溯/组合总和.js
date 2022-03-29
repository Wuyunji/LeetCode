/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let arr = []
  let temp = []
  function sum(array){
    return array.reduce((pre, n) => {
      return pre + n
    }, 0)
  }
  function backtrace(startIndex){
    if(sum(temp) > target)  return
    if(sum(temp)===target){
      arr.push([...temp]) 
      return
    }
    for(let i = startIndex; i < candidates.length; i++){
      temp.push(candidates[i])
      backtrace(i)
      temp.pop()
    }
  }
  backtrace(0)
  return arr
};
let s = combinationSum([2,3,5], 8)
console.log(s);
