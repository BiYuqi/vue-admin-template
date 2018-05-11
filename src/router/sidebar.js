import Main from '@/views/Main'
// 侧边栏路由一般都放在这里 需要权限校验
export const baseRoute = [
  {
    path: '/dashboard',
    component: Main,
    title: '首页',
    icon: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard_index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/dashboard/dashboard.vue')
      }
    ]
  },
  {
    path: '/icon',
    title: '图标',
    name: 'icon',
    icon: 'icon',
    component: Main,
    children: [
      {
        path: 'icon',
        name: 'icon_index',
        meta: {
          title: '图标'
        },
        component: () => import('@/views/icon-page/index.vue')
      }
    ]
  },
  {
    path: '/compoents',
    name: 'compoents',
    component: Main,
    title: '组件库',
    icon: 'component',
    children: [
      {
        path: 'markdown',
        name: 'markdown',
        meta: {
          title: 'Markdown',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/markdown.vue')
      },
      {
        path: 'back-to-top',
        name: 'back_to_top',
        meta: {
          title: 'BackTop',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/backToTop.vue')
      }
    ]
  },
  {
    path: '/setting',
    title: '配置',
    name: 'set',
    icon: 'qq',
    component: Main,
    children: [
      {
        path: 'setting',
        name: 'setting_index',
        meta: {
          title: '配置',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/setting.vue')
      }
    ]
  }
]
