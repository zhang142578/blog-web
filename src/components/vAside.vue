<template>
    <div id='aside'>
        <div id='avatar'>
            <img src="" alt="">
        </div>
        <div v-if='this.$store.state.islogin'>
          Welcome! {{username}}
          <el-button @click='signout'>注销</el-button>
        </div>
        <div v-if='!this.$store.state.islogin' id='register'>
            <button @click='toggle' class='button' size='small'>登陆</button>
            <button @click='b_register' class='button' size='small'>注册</button>
        </div>
        <transition name="el-fade-in-linear">
            <div v-if='stats===1' id='login'>
                <button @click='toggle' class='back'>返回</button>
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
            <div v-if='stats===2' id='zhuce'>
              <button @click='toggle' class='back'>返回</button>

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
      stats: 0,
      zhanghu: '',
      password: '',
      username: ''
    }
  },
  mounted () {
    if (localStorage.getItem('isLogin')) {
      this.username = localStorage.getItem('isLogin')
      this.$store.commit('login')
    }
  },
  components: {

  },
  methods: {
    signout () {
      this.$store.commit('signout')
      localStorage.clear()
    },
    toggle () {
      if (this.stats === 2 || this.stats === 1) {
        this.stats = 0
      } else {
        this.stats = 1
      }
    },
    b_register () {
      this.stats = 2
    },
    submit () {
      const params = {
        username: this.zhanghu,
        password: this.password
      }
      login(params).then(res => {
        if (res.errno === 0) {
          this.stats = 0
          this.username = res.message
          localStorage.setItem('isLogin', res.message)
          this.$store.commit('login')
        } else {
          alert(res.message)
        }
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
    .back
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
  #zhuce
    width:100%
    position absolute
    height 100%
    background white
    left 0
    top 0
    .back
      cursor pointer
      outline none
      border none
      border-radius 5px
      display block
      margin 20px 0
      padding 5px 5px
</style>
