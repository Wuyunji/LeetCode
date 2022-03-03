class Promise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }

    this.init()
    this.bindThis()

    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }

  init() {
    this.state = Promise.PENDING
    this.value = null
    this.reason = null
    this.onFulFilledCallbacks = []
    this.onRejectedCallbacks = []
  }

  bindThis() {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  resolve(value) {
    if (this.state === Promise.PENDING) {
      this.state = Promise.FULFILLED
      this.value = value
      this.onFulFilledCallbacks.forEach(fn => fn(this.value))
    }
  }

  reject(reason) {
    if (this.state === Promise.PENDING) {
      this.state = Promise.REJECTED
      this.reason = reason
      this.onRejectedCallbacks.forEach(fn => fn(this.reason))
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function (value) {
        return value
      }
    }

    if (typeof onRejected !== 'function') {
      onRejected = function (reason) {
        throw reason
      }
    }

    let newPromise = new Promise((resolve, reject) => {
      if (this.state === Promise.FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            Promise.resolvePromise(newPromise, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === Promise.REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            Promise.resolvePromise(newPromise, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === Promise.PENDING) {
        this.onFulFilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              Promise.resolvePromise(newPromise, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              Promise.resolvePromise(newPromise, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })
    return newPromise
  }
}
Promise.PENDING = 'pending'
Promise.FULFILLED = 'fulfilled'
Promise.REJECTED = 'rejected'
Promise.resolvePromise = function (promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError('Chaining cycle detected for promise'))
  }

  let isCalled = false

  if (x instanceof Promise) {
    x.then(value => {
      Promise.resolvePromise(promise, value, resolve, reject)
    }, reason => {
      reject(reason)
    })
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then
      if (typeof then !== 'function') {
        if (isCalled) return
        isCalled = true
        resolve(x)
      } else {
        then.call(x, value => {
          if (isCalled) return
          isCalled = true
          Promise.resolvePromise(promise, value, resolve, reject)
        }, reason => {
          if (isCalled) return
          isCalled = true
          reject(reason)
        })
      }
    } catch (e) {
      if (isCalled) return
      isCalled = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
