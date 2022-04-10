// promise.retry
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
        reject(r)
      }
    }, 1000);
  })
}

Promise.Retry(ajax, 3).then(res => {
  console.log(res);
}, err => {
  console.log(err);
})
