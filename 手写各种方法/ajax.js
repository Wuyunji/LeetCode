// ajax
function Ajax(url, options = {
  method: 'GET',
  param:''
}) {
  let { method } = options
  let xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url)
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 299) {
        console.log(xhr.response);
      }
    }
  }
}

Ajax('https://autumnfish.cn/search?keywords=你好', { method: 'get' })

