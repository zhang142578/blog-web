<template>
    <div id='aside'>
        <div id='avatar'>
            <img src="" alt="">
        </div>
        <div id='register'>
            <button @click='toggle' class='button' size='small'>登陆</button>
            <button class='button' size='small'>注册</button>
        </div>
        <transition name="el-fade-in-linear">
            <div v-if='stats' id='login'>
                <button @click='toggle' id='back'>返回</button>
                <p id='biaoyu'>欢迎</p>
                <div id='main'>
                    <el-input placeholder="请输入内容" v-model="zhanghu">
                        <template slot="prepend">账号</template>
                    </el-input>
                    <el-input type='password' placeholder="请输入内容" v-model="password">
                        <template slot="prepend">密码</template>
                    </el-input>
                    <el-button @click='submit' id='submit'>登陆</el-button>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { login } from '../api/api'
export default {
  name: 'aside',
  data () {
    return {
      stats: false,
      zhanghu: '',
      password: ''
    }
  },
  components: {

  },
  methods: {
    toggle () {
      this.stats = !this.stats
    },
    submit () {
      const params = {
        username: this.zhanghu,
        password: this.password
      }
      login(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
#aside
  position relative
  height 100%
  #avatar
    position absolute
    border 1px solid red
    width 100px
    height 100px
    left 50%
    transform translateX(-50%)
    border-radius 50%
    top 10%
  #register
    position absolute
    width 100%
    top 50%
    .button
        cursor pointer
        outline none
        border none
        color white
        border-radius 5px
        background rgba(7,17,27,0.7)
        display block
        width 100%
        height 50px
        margin 20px 0
  #login
    position absolute
    height 100%
    width 100%
    left 0
    top 0
    background white
    #biaoyu
      font-size 30px
    #back
      cursor pointer
      outline none
      border none
      border-radius 5px
      display block
      margin 20px 0
      padding 5px 5px
    #main
      position absolute
      width 100%
      top 50%
      left 50%
      transform translate(-50%,-50%)
      #submit
        margin-top 20%
</style>
