import Jsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    Jsonp(url, option, (err, res) => {
      if (!err) resolve(res)
      else reject(err)
    })
  })
}

export function param(data) {
  let url = ''
  Object.keys(data).forEach(key => {
    let v = data[key] !== undefined ? data[key] : ''
    url += '&' + key + '=' + encodeURIComponent(v)
  })
  return url ? url.substring(1) : ''
}