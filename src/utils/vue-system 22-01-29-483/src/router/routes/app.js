import Main from '@/views/Main'
export default {
  path: '/',
  name: 'main_index',
  component: Main,
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      name: 'dashboard_index',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/dashboard/dashboard.vue')
    },
    {
      path: 'alarm',
      name: 'alarm_index',
      component: () => import('@/components/HelloWorld.vue')
    }
  ]
}
