Function.prototype.Apply = function (context = window, args) {
  let fn = Symbol()
  context[fn] = this
  let ret = !!args ? context[fn](...args) : context[fn]()
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
obj.say.apply()
f.apply()

obj.say.Apply()
f.Apply()
