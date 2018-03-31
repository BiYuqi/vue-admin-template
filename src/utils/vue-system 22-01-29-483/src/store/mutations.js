export const mutations = {
  increateTag (state, tagObj) {
    state.pageOpenedList.push(tagObj)
  },
  pageOpenedList (state, params) {
    let opendPage = state.pageOpenedList[params.index]
    if (params.arg) {
      opendPage.arg = params.arg
    }
    if (params.query) {
      opendPage.query = params.query
    }
    state.pageOpenedList.splice(params.index, 1, opendPage)
    localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
  },
  clearAllTags (state) {
    state.pageOpenedList = []
    localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
  },
  setOpenedList (state) {
    state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : []
  },
  setSidebar (state) {
    if (!localStorage.getItem('sidebarStatus')) {
      localStorage.setItem('sidebarStatus', '0')
    }
    if (localStorage.getItem('sidebarStatus') === '0') { // 0
      state.sidebarStatus = '1'
      localStorage.setItem('sidebarStatus', '1')
    } else {
      state.sidebarStatus = '0'
      localStorage.setItem('sidebarStatus', '0')
    }
  }
}
