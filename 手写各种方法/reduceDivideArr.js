// reduce的使用
function reduceDivideArr(arr) {
  let ans = []
  let lastIndex = 0
  arr.reduce((pre, cur, index, arr) => {
    if (cur !== pre + 1) { // 如果当前值不为前一个值
      if (lastIndex === index - 1) {
        ans.push(`${arr[lastIndex]}`)
      } else {
        ans.push(`${arr[lastIndex]}-${arr[index-1]}`)// arr[index-1]可以替换为->pre
      }
      lastIndex = index
    }
    if (index === arr.length - 1) { //处理最后一次 最后一次reduce的index是arr.length-1
      if (lastIndex === index) {
        ans.push(`${arr[lastIndex]}`)
      } else {
        ans.push(`${arr[lastIndex]}-${arr[index]}`)// arr[index-1]可以替换为->cur
      }
    }
    return cur // 返回前一个值
  }, arr[0] - 1)
  return ans
}

let arr = [1, 2, 3, 6, 8, 9, 11] //  -->  [ '1-3', '6', '8-9', '11' ]
let s = reduceDivideArr(arr)
console.log(s);
