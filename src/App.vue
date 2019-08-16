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
</style>
