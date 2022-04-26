// compose 
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function add5(x) {
  return x + 5
}
function mul10(x) {
  return x * 10
}
function sub1(x) {
  return x - 1
}
// (10 + 5) * 10 - 1
let s = compose(sub1, mul10, add5)(10)
console.log(s); // 149
