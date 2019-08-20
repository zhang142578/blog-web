const axios = require('axios')
function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      const { errno, data } = res.data
      if (errno === 0) {
        resolve(data)
      } else {
        reject(errno)
      }
    }).catch(err => {
      console.log(err)
    })
  })
}
function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url,
      params, {
        headers: { 'content-type': 'application/json' }
      }).then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log(err)
    })
  })
}
module.exports = {
  get,
  post
}
