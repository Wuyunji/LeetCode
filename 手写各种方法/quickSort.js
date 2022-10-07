// 快速排序
// 面试速写版
function quickSort1(arr) {
  if (arr.length === 0) return [];
  let tempArr = arr.slice()
  let left = [];
  let right = [];
  let key = tempArr.splice(0, 1)[0];
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] < key) {
      left.push(tempArr[i]);
    } else {
      right.push(tempArr[i]);
    }
  }
  return [...quickSort1(left), key, ...quickSort1(right)];
}

// 常规版
function quickSort2(arr) {
  function sort(left, right) {
    if (left > right) return;
    let key = arr[left];
    let i = left;
    let j = right;
    while (i < j) {
      while (i < j && arr[j] > key) j--;
      if (i < j) arr[i++] = arr[j];
      while (i < j && arr[i] < key) i++;
      if (i < j) arr[j--] = arr[i];
    }
    arr[i] = key;
    sort(left, j - 1);
    sort(i + 1, right);
  }
  sort(0, arr.length - 1);
  return arr;
}

let arr = [5, 3, 7, 9, 8, 1, 2, 0, 6, 4];
let s1 = quickSort1(arr);
let s2= quickSort2(arr);
console.log(s1);
console.log(s2);
