import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import {mutations} from './mutations'
import user from './user'
import permiss from './permiss'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permiss
  },
  state,
  mutations
})

export default store
