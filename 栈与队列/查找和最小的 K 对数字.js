// 查找和最小的 K 对数字
/**
  * @param {number[]} nums1
  * @param {number[]} nums2
  * @param {number} k
  * @return {number[][]}
  */
var kSmallestPairs = function (nums1, nums2, k) {
  let m = nums1.length, n = nums2.length;
  // 记录每个位置的指针，索引从0开始
  let dp = new Array(Math.min(m, k)).fill(0);
  let result = [];

  while (result.length < k) {
    let minIndex = -1, minValue = Number.MAX_VALUE;
    for (let i = 0; i < dp.length; i++) {
      // 兼容一下数量不够的情况
      if (dp[dp.length - 1] === n) return result;

      // 走到尽头了，此路不通
      if (dp[i] === n) continue;

      let cur = nums1[i] + nums2[dp[i]];
      if (cur < minValue) {
        minIndex = i;
        minValue = cur;
      }

      // 判断为空的时候不往后走
      if (dp[i] === 0) {
        break;
      }
    }

    // 记录当前最小值，指针右移
    result.push([nums1[minIndex], nums2[dp[minIndex]]]);
    dp[minIndex]++;
  }

  return result;








  // if (nums1.length == 0 || nums2.length == 0) return []
  // if (k > nums1.length * nums2.length) k = nums1.length * nums2.length

  // let steps = new Array(nums1.length).fill(0)
  // let results = []

  // for (let i = 0; i < k; i++) {
  //   let min = Number.MAX_VALUE
  //   let minStepIndex = 0
  //   for (let j = 0; j < nums1.length; j++) {
  //     if (steps[j] < nums2.length && nums2[steps[j]] + nums1[j] < min) {
  //       min = nums2[steps[j]] + nums1[j]
  //       minStepIndex = j
  //     }
  //   }
  //   results.push([nums1[minStepIndex], nums2[steps[minStepIndex]]])
  //   steps[minStepIndex]++
  // }
  // return results




  // let arr = []
  // let queue = []
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     if (queue.length === 0 ||
  //       nums1[i] + nums2[j] >= nums1[queue[queue.length - 1][0]] + nums2[queue[queue.length - 1][1]]) {
  //       queue.push([i, j])
  //     } else {
  //       while (queue.length > 0) {
  //         let [x, y] = queue[0]
  //         if (nums1[i] + nums2[j] < nums1[x] + nums2[y]) {
  //           arr.push([nums1[i], nums2[j]])
  //           break
  //         } else {
  //           arr.push([nums1[x], nums2[y]])
  //           queue.shift()
  //         }
  //       }
  //     }
  //   }
  // }
  // while (queue.length > 0) {
  //   let [x, y] = queue.shift()
  //   arr.push([nums1[x], nums2[y]])
  // }
  // return arr.sort((a, b) => {
  //   if (a[0] + a[1] < b[0] + b[1]) {
  //     return -1
  //   } else if (a[0] + a[1] > b[0] + b[1]) {
  //     return 1
  //   } else {
  //     return b[0] - a[0]
  //   }
  // }).slice(0, k)
};

let s = kSmallestPairs([1, 1, 2], [1, 2, 3], 2)
console.log(s);
