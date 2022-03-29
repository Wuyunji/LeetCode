/**
 * @param {string} url
 * @return {object}
 */
function parseUrl(url) {
  url = decodeURIComponent(url);
  let strs = url.slice(url.indexOf('?') + 1).split('&');
  return strs.reduce((preObj, obj) => {
    let key = obj.split('=')[0];
    // let value = Object.is(Number(obj.split('=')[1]), NaN) ? obj.split('=')[1] : Number(obj.split('=')[1]);
    let value = obj.split('=')[1]
    preObj[key] = value;
    return preObj;
  }, {});
}
let s = parseUrl('https://juejin.cn/post/6844904175562653710#heading-165?abc=ahhhh&qqq=NaN')
console.log(s);
