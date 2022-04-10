// bind
Function.prototype.Bind = function (context = window, ...args1) {
  let fn = this
  return function F(...args2) {
    if (this instanceof F) {
      return new fn(...args1, ...args2)
    }
    return fn.call(context, ...args1, ...args2)
  }
}

let a = 'global'
let obj = {
  a: 'obj',
  say: function () {
    console.log(this.a);
  }
}
let f = obj.say
obj.say.bind()
f.bind()

obj.say.Bind()
f.Bind()
