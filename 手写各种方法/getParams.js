// getParams 解析URL parseURL
function getParams(url) {
  url = decodeURIComponent(url)
  let obj = {}
  let s1 = url.split(/\?|\#/)
  let s2 = s1[1].split('&')
  for (let s of s2) {
    let key = s.split('=')[0]
    let value = s.split('=')[1]
    obj[key] = value
  }
  return obj
}

let url = 'http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name'
let s = getParams(url)
console.log(s);
