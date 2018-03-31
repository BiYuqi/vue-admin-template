<template>
  <div class="main-wrap">
    <side-bar></side-bar>
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from '@/views/layout/appMain'
import SideBar from '@/views/layout/sidebar'
export default {
  data () {
    return {
    }
  },
  components: {
    AppMain,
    SideBar
  },
  created () {
    this.$store.commit('setOpenedList')
  },
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style lang="scss">
</style>
