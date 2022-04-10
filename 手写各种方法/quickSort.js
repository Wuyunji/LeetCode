// 快速排序
function quickSort(arr) {
  function sort(left, right) {
    if (left > right) return
    let key = arr[left]
    let i = left
    let j = right
    while (i < j) {
      while (i < j && arr[j] > key) j--
      if (i < j) arr[i++] = arr[j]
      while (i < j && arr[i] < key) i++
      if (i < j) arr[j--] = arr[i]
    }
    arr[i] = key
    sort(left, j - 1)
    sort(i + 1, right)
  }
  sort(0, arr.length - 1)
  return arr
}
let arr = [5, 3, 7, 9, 8, 1, 2, 0, 6, 4]
quickSort(arr)
console.log(arr);
