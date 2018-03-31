<template>
  <div class="app-main" :class="{active: sidebar === '1' ? true: false}">
    <header-on></header-on>
    <router-view :key="key"/>
  </div>
</template>

<script>
import HeaderOn from '@/views/layout/header'
export default {
  components: {
    HeaderOn
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    sidebar () {
      return this.$store.state.sidebarStatus
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/layout/appmain.scss';
</style>
