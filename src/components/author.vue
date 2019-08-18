<template>
    <div id='author'>
        <p id='header'>{{blogList[0].author}}的博客</p>
        <el-table stripe :data='blogList'>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="createtime" label="发表时间"></el-table-column>
            <el-table-column prop="author" label='作者'></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  created () {
    if (JSON.stringify(this.$route.params) === '{}') {
      this.$router.push('/')
    } else {
      this.blogList = this.$route.params.authorBlogList
    }
  },
  data () {
    return {
      blogList: []
    }
  }
}
</script>
<style lang='stylus'>
#author
  #header
    height 50px
    line-height 50px
    padding-bottom 20px
</style>
