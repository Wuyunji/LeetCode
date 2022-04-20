// jsonp
function jsonp1(url, data, callbackName) {
  return new Promise((resolve, reject) => {
    // 参数处理
    let params = ''
    for (let key in data) {
      params += `${key}=${encodeURIComponent(data[key])}&`;
    }

    // 向body插入一个script标签
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `${url}?${params}${callbackName}=fn`
    document.body.appendChild(script)

    // 定义全局函数 前端自定义的
    window['fn'] = function (res) {
      resolve(res)
      document.body.removeChild(script)
    }
  })
}

function jsonp2(url, data, callbackName, callback) {
  // 参数处理
  let params = ''
  for (let key in data) {
    params += `${key}=${encodeURIComponent(data[key])}&`;
  }

  // 向body插入一个script标签
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `${url}?${params}${callbackName}=fn`
  script.addEventListener('load', callback)
  document.body.appendChild(script)

  // 定义全局函数 前端自定义的
  window['fn'] = function (res) {
    console.log(res);
    document.body.removeChild(script)
  }
}

const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
const data = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp',
  platform: 'h5',
  uin: 0,
  needNewCode: 1
}
const callbackName = 'jsonpCallback'

jsonp1(url, data, callbackName, () => {
  console.log('JSONP1成功');
})

jsonp2(url, data, callbackName).then((res) => {
  console.log(res);
  console.log('JSONP2成功');
})
