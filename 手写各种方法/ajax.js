// ajax
function Ajax(url, options = { method: 'GET', param: null }) {
  return new Promise((resolve, reject) => {
    let { method, param } = options
    let xhr = new XMLHttpRequest()
    xhr.open(method.toUpperCase(), url)
    xhr.send(param)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <= 299 || xhr.status === 304) {
          resolve(xhr.response)
        } else {
          reject(new Error(xhr.response))
        }
      }
    }
  })
}

Ajax('https://autumnfish.cn/search?keywords=你好', { method: 'get' })
  .then(value => {
    console.log(value);
  }, reason => {
    console.log(reason);
  })

