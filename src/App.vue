<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './views/home'
export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
#app{
  background url('../public/256891-1F6220ZT712.jpg') no-repeat
  background-size 100%
}
</style>
