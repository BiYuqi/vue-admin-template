<template>
  <div class="dashboard">
    <button type="button" name="button" @click="jump">点击跳进hello word</button>
  </div>
</template>
<script>
import { myMixin } from './index'
export default {
  mixins: [myMixin],
  data () {
    return {}
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
