<template>
  <svg class="icon" :class="iconClass">
    <use :xlink:href="Icons[name]"></use>
  </svg>
</template>

<script>
import Icons from '@/assets/icons'
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      Icons: Icons,
      iconClass: 'icon-' + this.name
    }
  }
}
</script>

<style lang="scss">

</style>
