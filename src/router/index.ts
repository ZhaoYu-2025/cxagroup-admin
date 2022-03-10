import { 
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';
import type { App } from 'vue';

import Home from '/@/views/home.vue';
import Vuex from '/@/views/vuex.vue';

const basicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('/@/views/axios.vue') // 懒加载组件方式
  }
]

// app router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  strict: true, // 严格路由模式
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
