// promise.retry 1
Promise.Retry = function (fn, times) {
  return new Promise((resolve, reject) => {
    function _try() {
      fn()
        .then(res => resolve(res))
        .catch(e => {
          if (--times === 0) {
            reject('全部失败')
          } else {
            _try()
          }
        })
    }
    _try()
  })
}
// promise.retry 2
Promise.Retry = function (fn, times) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        let ans = await fn()
        resolve(ans)
        break
      } catch (e) {
        if (times === 0) {
          reject(e)
        }
      }
    }
  }).catch(e => {
    throw new Error('全部执行失败')
  })
}

function ajax() {
  return new Promise((resolve, reject) => {
    let r = Math.random()
    setTimeout(() => {
      if (r > 0.8) {
        resolve(r)
      } else {
        reject()
      }
    }, 1000);
  })
}

Promise.Retry(ajax, 3).then(res => {
  console.log(res);
}, err => {
  console.log(err);
})
