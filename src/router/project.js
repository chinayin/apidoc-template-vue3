import Layout from '/@/layout/index.vue';

/**
 * 项目project,article路由
 */
const projectRouter = {
  path: '/d',
  name: 'project',
  component: Layout,
  // 重定向
  redirect: '/',
  // 路由元信息
  meta: {},
  children: [
    {
      path: ':group/:name',
      name: 'article',
      component: () => import('/~/article.vue'),
      // component: () => import('/~/article22.vue'),
      // 将 props 传递给路由组件
      // props: true,
      meta: {}
    },
  ]
}
export default projectRouter
