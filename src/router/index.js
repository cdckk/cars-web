import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/User.vue')
      },
      {
        path: '/safe',
        name: 'Safe',
        component: () => import('../views/safe/Safe.vue')
      },
      {
        path: '/password',
        name: 'password',
        component: () => import('../views/safe/password/PassWord.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
