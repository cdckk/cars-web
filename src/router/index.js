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
        meta: { title: '用户中心' },
        component: () => import('../views/user/User.vue')
      },
      // 账户
      // 登录
      {
        path: '/login',
        name: 'Login',
        meta: { title: '登录' },
        component: () => import('../views/account/login.vue')
      },
      // 注册
      {
        path: '/register',
        name: 'Register',
        meta: { title: '注册' },
        component: () => import('../views/account/register.vue')
      },
      // 忘记密码
      {
        path: '/forget',
        name: 'Forget',
        meta: { title: '重置密码' },
        component: () => import('../views/account/forget.vue')
      },
      // 安全
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
