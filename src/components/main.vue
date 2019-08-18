<template>
    <div id='main'>
        <p id='header'>博客列表</p>
        <el-table stripe :data='blogList'>
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column prop="createtime" label="发表时间"></el-table-column>
              <el-table-column prop="author" label='作者'>
                <template slot-scope="scope">
                  <button id='button' @click='handle(scope.row.author)'>{{scope.row.author}}</button>
                </template>
              </el-table-column>
        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
        </el-pagination>
        </el-table>
    </div>
</template>
<script>
import { getBlogList, getBlogByAuthor } from '../api/api'
const { timeFormat } = require('../api/timeformat')
export default {
  data () {
    return {
      blogList: [],
      authorBlogList: []
    }
  },
  created () {
    getBlogList.then(res => {
      for (let item of res) {
        item.createtime = timeFormat(item.createtime)
      }
      this.blogList = res
    })
  },
  methods: {
    handle (author) {
      getBlogByAuthor(author).then(res => {
        this.authorBlogList = res
        console.log(this.authorBlogList)
        this.$router.push({ name: 'author', params: { authorBlogList: this.authorBlogList } })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

.router-link
  text-decoration none
  color black
#main
  #header
    height 50px
    line-height 50px
    padding-bottom 20px
  #button
    border none
    font-size 14px
    cursor pointer
    color skyblue
    background none
    outline none
</style>
