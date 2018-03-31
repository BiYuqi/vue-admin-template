<template>
  <div class="header-wrap">
    <button type="button" name="button" @click="changeTab">切换</button>
    我是header
    <button @click="goBack">后退</button>
    <button @click="loginOut">退出登录</button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    loginOut () {
      Cookie.remove('user')
      localStorage.removeItem('pageOpenedList')
      this.$store.commit('clearAllTags')
      setTimeout(() => {
        this.$router.push({
          name: 'login'
        })
      }, 0)
    },
    changeTab () {
      this.$store.commit('setSidebar')
    }
  }
}
</script>

<style lang="css">
</style>
