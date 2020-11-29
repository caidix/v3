import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  {
    path: '/playlists/:id',
    name: 'playlists',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '/@/views/PlayList/index.vue'),
    meta: {
      title: '歌单详情',
    },
  },
];
// 获取路由配置router.getRoutes() 移除某一个路由router.removeRoute(name)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
