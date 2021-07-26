import {createRouter, createWebHashHistory} from 'vue-router'
import homeRouter from './home'
import errorRouter from './error'
import projectRouter from './project'

const routes = [
  homeRouter,
  errorRouter,
  projectRouter,
]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
