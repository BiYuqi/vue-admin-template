<template>
  <div class="app-main" :class="{hideSidebar: isCollapse}">
    <header-on></header-on>
    <tag-view></tag-view>
    <div class="components-wrap">
      <router-view :key="key"/>
    </div>
  </div>
</template>

<script>
import HeaderOn from '@/views/layout/Header/Header'
import TagView from '@/views/layout/TagViews/TagView'
export default {
  components: {
    HeaderOn,
    TagView
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    isCollapse () {
      return this.$store.state.sidebarStatus
    }
  }
}
</script>

<style lang="scss">
@import './appmain.scss';
</style>
