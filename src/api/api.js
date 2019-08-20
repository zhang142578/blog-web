const { get, post } = require('./helper')
const getBlogList = get('/api/blog/list')
const getBlogByAuthor = function (author) {
  return get('/api/blog/list?author=' + author)
}
const login = function (params) {
  return post('/api/user/login', params).then(res => {
    if (res.errno === 0) {
      // this.$store.commit('login')
    }
    return res
  })
}
module.exports = {
  getBlogList,
  getBlogByAuthor,
  login
}
