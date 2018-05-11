import * as types from './types'

const state = {
  role: []
}

const mutations = {
  [types.USER_INFO] (state, res) {
    state.role = res.data.data.role
  },
  [types.RESET_ROLE] (state) {
    state.role.length = 0
  }
}

const actions = {
  getUserInfoAction ({state, commit, dispatch, getters, rootGetters}, data) {
    const payload = rootGetters['api/payload']
    payload.param = data
    return new Promise((resolve, reject) => {
      payload.callback = res => {
        resolve(res)
      }
      dispatch('api/getUserInfo', payload, {root: true})
    })
  }
}

const getters = {
  role: state => {
    return state.role
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
