const { get, post } = require('./helper')
const getBlogList = get('/api/blog/list')
const getBlogByAuthor = function (author) {
  return get('/api/blog/list?author=' + author)
}
const login = function (params) {
  return post('/api/user/login', params)
}
module.exports = {
  getBlogList,
  getBlogByAuthor,
  login
}
