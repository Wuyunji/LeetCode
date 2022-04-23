// 圣杯模式继承 寄生组合继承
function inherit(target, origin) {
  function F() { }
  F.prototype = origin.prototype
  target.prototype = new F()
  target.prototype.constructor = target
}

function Father() {
  this.name = 'wyj'
  this.age = 18
}
function Son() {
  Father.call(this)
  this.play = 'game'
}
inherit(Son, Father)
let s = new Son()
console.log(s);
