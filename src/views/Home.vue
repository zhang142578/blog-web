<template>
<div id='home'>
    <el-container>
        <el-aside width='260px'>Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
.el-container
  height 100vh
  .el-aside
    background #D3DCE6
    color #333
    text-align center
  .el-container
    .el-header
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
    .el-main
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
</style>
