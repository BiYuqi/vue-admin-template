import { baseRoute } from '@/router/sidebar'
import { filterRoutesByRole } from '@/utils/permission'
import * as types from './types'

const state = {
  routers: []
}

const mutations = {
  [types.RM_ROUTES] (state) { // 清除路由
    state.routers.length = 0
  },
  [types.SET_ROUTES] (state, res) { // 设置路由
    state.routers = res
  }
}

const getters = {
  routers: state => {
    return state.routers
  }
}

const actions = {
  setFilterRoutes ({state, commit, dispatch, getters, rootGetters}, data) {
    return new Promise((resolve, reject) => {
      const role = data
      const result = filterRoutesByRole(baseRoute, role)
      resolve(result)
    })
  },
  setRoutes ({commit}, res) {
    commit(types.SET_ROUTES, res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
