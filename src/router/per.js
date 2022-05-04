import router from './index'
import store from '../store'

router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  console.log(to)
  if (to.meta && to.meta.title) {
    const routerName = to.meta.title
    document.title = routerName
    store.commit('app/SET_ROUTER_NAME', routerName)
  }
  next()
})