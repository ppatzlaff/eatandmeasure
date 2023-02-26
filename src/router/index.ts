import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/dashboard',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard.vue'),
          sidebar: () => import(/* webpackChunkName: "home" */ '@/components/Navigation.vue')
        },
      },
      {
        path: '/measure',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/views/Measure.vue'),
          sidebar: () => import(/* webpackChunkName: "home" */ '@/components/Navigation.vue')
        }
      },
      {
        path: '/manage',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/views/Manage.vue'),
          sidebar: () => import(/* webpackChunkName: "home" */ '@/components/Navigation.vue')
        }
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
