export const state = {
  pageOpenedList: [
    {
      path: '/dashboard',
      name: 'dashboard_index',
      meta: {
        title: '首页'
      },
      arg: {},
      query: {}
    }
  ],
  sidebarStatus: 0, // 展开
  headVisetedShow: true, // 顶部访问历史tab 是否显示
  currentPageName: '' // 当前路由name
}
