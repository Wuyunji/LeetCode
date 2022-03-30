function f(arr) {
  let ans = []
  function backtrace(startIndex, temp) {
    if (undefined /* 不满足条件 */) {
      return
    }
    if (undefined /* 满足条件 */) {
      ans.push([...temp])
      return
    }
    for (let i = startIndex; i < arr.length; i++) {
      temp.push(arr[i])
      backtrace(i + 1, temp)
      temp.pop()
    }
  }
  backtrace(0, [])
  return ans
}
