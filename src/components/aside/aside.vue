<template>
<div id='aside'>
    <div id='head-img'>
        <img src="" alt="">
    </div>
    <button id='wel-button'>Welcome</button>
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
#aside
  position relative
  height 100vh
  width 260px
  #head-img
    width 130px
    height 130px
    border 1px solid red
    position absolute
    left 50%
    top 20%
    transform: translate(-50%, -50%)
    border-radius 50%
  #wel-button
    position absolute
    left 50%
    top 60%
    transform: translate(-50%, -50%)
    width 100%
    display block
    height 30px
</style>
