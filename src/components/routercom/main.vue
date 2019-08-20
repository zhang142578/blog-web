<template>
<div>
    main
</div>
</template>

<script>
import { getBlogList } from '../../api/api'
export default {
  name: '',
  components: {},
  created () {
    console.log(getBlogList)
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
</style>
