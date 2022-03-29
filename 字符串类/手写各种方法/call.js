Function.prototype.Call = function (context = window, ...args) {
  let fn = Symbol()
  context[fn] = this
  let ret = context[fn](...args)
  delete context[fn]
  return ret
}
let a = 'global'
let obj = {
  a: 'obj',
  say: function () {
    console.log(this.a);
  }
}
let f = obj.say
obj.say.call()
f.call()

obj.say.Call()
f.Call()
