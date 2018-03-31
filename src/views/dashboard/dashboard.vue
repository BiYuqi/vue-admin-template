<template>
  <div class="dashboard">
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
  .dashboard{
    height: 100%;
    background: url('../../assets/img/bg2.jpg') 100% 100%;
    background-size: cover;
  }
</style>
