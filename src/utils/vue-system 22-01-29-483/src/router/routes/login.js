export default {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: () => import('@/views/login/login.vue')
}
