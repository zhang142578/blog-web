<template>
<div id='home'>
    <el-container>
        <el-aside width='260px'>
          <v-aside></v-aside>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import vAside from '../components/vAside'
export default {
  name: '',
  components: {
    vAside
  },
  created () {

  },
  mounted () {

  },
  data () {
    return {
      bloglist: ''
    }
  }
}
</script>

<style lang="stylus">
.el-container
  height 100vh
  .el-aside
    background rgba(7,17,27,0.5)
    color #333
    text-align center
  .el-container
    .el-header
      background-color:  rgba(7,17,27,0.3);
      color: #333;
      text-align: center;
    .el-main
      background-color:  rgba(7,17,27,0.2);
      color: #333;
      text-align: center;
</style>
