// new
function New(constructor, ...args) {
  let obj = Object.create(constructor.prototype);
  let ans = constructor.apply(obj, args);
  return ans !== null && (typeof ans === "object" || typeof ans === "function")
    ? ans
    : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p = New(Person, "wyj", 18);
console.log(p);
