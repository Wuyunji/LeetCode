var MinStack = function () {
  this.minStack = []
  this.min = Infinity
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  this.minStack.push(this.min)
  this.minStack.push(val)
  if (val < this.min) {
      this.min = val
  }

};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.minStack.pop()
  this.min = this.minStack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.minStack[this.minStack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.min
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
