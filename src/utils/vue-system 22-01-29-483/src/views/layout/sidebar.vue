<template>
  <div class="sidebar-wrap" :class="{active: sidebar === '1' ? true: false}">
    <div class="opend-list">
      <el-menu
        default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(52, 133, 172)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{isCollapse}}</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    getOpendPage () {
      return this.$store.state.pageOpenedList
    },
    sidebar () {
      return this.$store.state.sidebarStatus
    },
    isCollapse () {
      return this.$store.state.sidebarStatus === '1' ? true: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath, 'open')
      console.log(this.sidebar)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath, 'close')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/layout/sidebar.scss';
.tac{
  width: 100%;
}
</style>
