import {AjaxRequest} from '@/http/http'
/*
*https://www.mmxiaowu.com/article/591a74f60ef91a5c93a340c4
*/
export const ajaxMethod = ({state, dispatch}, data) => {
  let method = data.param[0]
  let url = data.param[1]
  let param = data.param[2]
  let payload = data.param[3]
  let error = res => {
    state.error = res
  }
  payload.error = error
  const request = new AjaxRequest(url, param, payload)
  if (method === 'GET') {
    request.getAjaxMethod(url, param, payload)
  } else if (method === 'POST') {
    request.postAjaxMethod(url, param, payload)
  } else if (method === 'PUT') {
    request.putAjaxMethod(url, param, payload)
  } else if (method === 'DELETE') {
    request.deleteAjaxMethod(url, param, payload)
  } else {
    request.getAjaxMethod(url, param, payload)
  }
}
/**
* 使用方法
* 这里只是把请求接口写出来，真实的调用分布在各个模块里面的actions
* 本文件只是集中存放接口请求
*/
export const testAjax = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + '/5a84566ae92b195f8f13faff/example/test', payload.param, payload]}, {root: true})
}
