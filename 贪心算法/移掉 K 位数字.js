// 移掉K位数字
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length === k) return "0";
  let stack = [num[0]];
  for (let i = 1; i < num.length; i++) {
    while (k > 0 && stack.length > 0 && num[i] < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  let stack2 = stack.slice(0, stack.length - k);
  while (stack2[0] === "0") {
    stack2.shift();
  }
  return stack2.length === 0 ? "0" : stack2.join("");
};

let s = removeKdigits("10004", 3);
console.log(s);
