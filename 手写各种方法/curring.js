// 柯里化
function Curring(fn, ...args1) {
  let args = [...args1]
  let context = this
  return function F(...args2) {
    args.push(...args2)
    if(args2.length === 0){
      return fn.apply(context, args)
    }else{
      return F
    }
  }
}

function add(...args) {
  return args.reduce((p, x) => p + x, 0)
}
let curring = Curring(add, 100, 200)
let s = curring(1)(2)(3,4)()
console.log(s);
