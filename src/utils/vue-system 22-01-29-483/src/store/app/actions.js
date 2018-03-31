import * as types from './mutation-types'
export const getVersionAction = ({dispatch, state, commit, getters, rootGetters}, data) => {
  commit(types.VERSION, state.version += 1)
}
/*
* 测试ajax调用
*/
export const testAjaxAction = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  // 接口回调 => 触发mutation
  payload.callback = res => {
    commit(types.TEST_AJAX, res)
  }
  // 调用接口 => testAjax
  dispatch('api/testAjax', payload, {root: true})
}
