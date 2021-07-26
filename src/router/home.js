import Layout from '/@/layout/index.vue'

/**
 * 主页面路由
 */
const homeRouter = {
  path: '/',
  name: 'home',
  component: Layout,
  redirect: '/welcome',
  meta: {},
  children: [
    {
      path: '/welcome',
      component: () => import('/~/welcome.vue'),
      meta: {title: 'welcome'}
    },
  ]
}
export default homeRouter
