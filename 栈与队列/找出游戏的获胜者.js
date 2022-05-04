// 找出游戏的获胜者 约瑟夫环
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let queue = []
  for (let i = 1; i <= n; i++) {
    queue.push(i)
  }
  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift())
    }
    queue.shift()
  }
  return queue[0]

  
  // 动态规划秒杀
  // let dp = 0
  // for (let i = 2; i <= n; i++) {
  //   dp = ((dp + k) % i)
  // }
  // return dp + 1


  // 递归秒杀
  // if (n == 1) return 1
  // const ans = findTheWinner(n - 1, k) + k
  // return ans % n == 0 ? n : (ans % n)
};

let s = findTheWinner(5, 2)
console.log(s);
