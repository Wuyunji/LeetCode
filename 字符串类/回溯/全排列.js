/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums){
  let arr = []
  let temp = []
  let used = []
  function backtrack(){
    if(temp.length === nums.length){
      arr.push([...temp])
    }
    for(let i = 0; i < nums.length; i++){
      if(used[i]) continue
      temp.push(nums[i])
      used[i] = true
      backtrack()
      temp.pop()
      used[i] = false
    }
  }
  backtrack()
  return arr
}

let s = permute([1, 2, 3, 4])
console.log(s);
