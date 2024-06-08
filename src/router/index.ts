import { createRouter, createWebHistory } from 'vue-router'

const pageStartRoutes = [
  {
    path: '/',
    name: 'startpage',
    component: () => import('@/views/startpage.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/mode1',
    name: 'Mode1',
    component: () => import('../views/index.vue')
  }
]

const otherRoutes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/game',
    redirect: '/game/1'
  },
  {
    path: '/game/:id',
    name: 'game',
    component: () => import('../views/gameWorker/index.vue')
  },
  {
    path: '/dev/createMap',
    name: 'createMap',
    component: () => import('../views/dev/createMap/index.vue')
  }
]

// 合并后的路由配置
const routes = [
  ...pageStartRoutes, // pageStart项目的路由放前面
  ...otherRoutes 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router