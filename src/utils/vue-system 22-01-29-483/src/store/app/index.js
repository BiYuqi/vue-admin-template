import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

const state = {
  version: '1.0',
  testAjax: {}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
