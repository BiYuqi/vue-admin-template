<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>{{version}}</li>
    </ul>
    <div v-if="testAjax">
      <h2>{{testAjax.title}}</h2>
      <div class="">
        {{testAjax.content}}
      </div>
    </div>
    <button type="button" @click="request">请求数据</button>
    <button type="button" @click="addVersion">测试版本</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions('app', [
      'getVersionAction', // 简单vuex命名空间测试
      'testAjaxAction' // 对接接口测试
    ]),
    addVersion () {
      this.getVersionAction()
      this.$router.push({
        name: 'dashboard_index'
      })
    },
    request () {
      this.testAjaxAction()
    }
  },
  computed: {
    ...mapGetters('app', [
      'version',
      'testAjax'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
