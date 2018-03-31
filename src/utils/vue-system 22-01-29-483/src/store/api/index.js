import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const state = {
  payload: {
    param: {},
    status: 200,
    callback: () => {},
    error: (res) => {}
  },
  server: {
    server1: 'https://easy-mock.com/mock'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
